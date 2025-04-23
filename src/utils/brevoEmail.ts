import { TransactionalEmailsApi, SendSmtpEmail, SmtpEmailTo } from '@getbrevo/brevo';

// Environment Variables:
// BREVO_API_KEY: Your Brevo API key. Used in server-side code (e.g., Netlify Functions).
// BREVO_SENDER_EMAIL: The email address you'll use as the sender. Used in server-side code.
// BREVO_SENDER_NAME: The name associated with the sender email. Used in server-side code.
// REACT_APP_SITE_URL: The base URL of your application (e.g., https://yourdomain.com).
//                     Should be prefixed with REACT_APP_ if used in client-side code (React).
const apiKey = process.env.BREVO_API_KEY || '';
const senderEmail = process.env.BREVO_SENDER_EMAIL || '';
const senderName = process.env.BREVO_SENDER_NAME || '';
const siteUrl = process.env.REACT_APP_SITE_URL || '';

// Validate if all required environment variables are present
if (!apiKey || !senderEmail || !senderName || !siteUrl) {
  throw new Error('Missing Brevo API key, sender email, sender name, or site URL in environment variables.');
}

// Configure API key authorization
const apiInstance = new TransactionalEmailsApi();
apiInstance.setApiKey(TransactionalEmailsApi.Authentications.apiKey, apiKey);




export async function sendVerificationEmail(email: string, token: string, userId: string): Promise<void> {
  const emailTemplate = `
      <p>Hello,</p>
      <p>Thank you for registering. Please click on the following link to verify your account:</p>
      <p><a href="{{VERIFICATION_LINK}}">Verify Account</a></p>
      <p>Best regards,</p>
      <p>Your App Team</p>`;

  const verificationLink = `${siteUrl}/verify?token=${token}&userId=${userId}`;

  const sendSmtpEmail = new SendSmtpEmail();
  sendSmtpEmail.subject = 'Verify Your Account'; // Email subject
  sendSmtpEmail.htmlContent = emailTemplate.replace('{{VERIFICATION_LINK}}', verificationLink); // HTML content of the email
  sendSmtpEmail.sender = { name: senderName, email: senderEmail }; // Sender info
  sendSmtpEmail.to = [{ email: email } as SmtpEmailTo]; // Recipient

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error: any) {
    console.error('Error sending email:', {
        errorName: error.name,
        errorMessage: error.message,
        errorCode: error.code,
        errorResponse: error.response ? JSON.stringify(error.response.data) : 'No response data',
        errorStack: error.stack
      });
    throw new Error(`Error sending email: ${error.message || 'Unknown error'}`);
  }
}