const Brevo = require('@getbrevo/brevo');

// In-memory store for verification data (replace with a database in production)
const verificationDataStore = {};

// Function to generate verification data (token and user ID)
const generateVerificationData = () => {
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const userId = Math.random().toString(36).substring(2, 9);
  return { token, userId };
};

// Function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to validate environment variables
const validateEnvVariables = () => {
  const requiredVariables = ['BREVO_API_KEY', 'BREVO_SENDER_EMAIL', 'BREVO_SENDER_NAME', 'SITE_URL'];
  const missingVariables = requiredVariables.filter(variable => !process.env[variable]);
  if (missingVariables.length > 0) {
    throw new Error(`Missing environment variables: ${missingVariables.join(', ')}`);
  }
};

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }
  console.log('Starting send verification email function');
  
  // Validate env variables
  try{
    validateEnvVariables();
  } catch (error){
    return { statusCode: 500, body: JSON.stringify({error: error.message}) };
  }
  
  let requestData;
  try {
    requestData = JSON.parse(event.body);
  } catch (error) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const { email, firstName, lastName } = requestData;
  
  // Validate required fields
  if (!email || !firstName || !lastName) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email format' }) };
  }

  const { token, userId } = generateVerificationData();
  
  // Store verification data temporarily
  verificationDataStore[userId] = {
    email,
    token,
    firstName,
    lastName,
  };
  
  // Obtener la URL base desde las variables de entorno o usar la URL de Netlify
  const baseUrl = process.env.SITE_URL || context.site.url;
  const verificationLink = `${baseUrl}/verify?token=${token}&userId=${userId}`;

  // Configure Brevo client
  const defaultClient = Brevo.ApiClient.instance;
  defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;
  const apiInstance = new Brevo.TransactionalEmailsApi();

  // Create SendSmtpEmail
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  sendSmtpEmail.sender = { name: process.env.BREVO_SENDER_NAME, email: process.env.BREVO_SENDER_EMAIL };
  sendSmtpEmail.to = [{ email, name: `${firstName} ${lastName}` }];
  sendSmtpEmail.subject = 'Verify your account in the Vibration Exam Simulator';
  sendSmtpEmail.htmlContent = `
    <html>
      <head></head>
      <body>
        <h2>Hello ${firstName},</h2>
        <p>Thank you for registering in our Vibration Exam Simulator.</p>
        <p>To complete your registration, click on the following link:</p>
        <p><a href="${verificationLink}">${verificationLink}</a></p>
        <p>If you did not request this registration, you can ignore this email.</p>
        <p>Regards,<br>The Vibration Exam Simulator Team</p>
      </body>
    </html>
  `;
  sendSmtpEmail.tags = ['registration', 'verification'];

  // Send the email using Brevo API
  try {
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Verification email sent successfully',
        messageId: result.messageId,
      }),
    };
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.text,
      config: error.config,
    });
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: 'Failed to send verification email',
        details: error.message,
        response: error.response?.text,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      }),
    };
  }
}; 