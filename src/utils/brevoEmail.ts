import * as SibApiV3Sdk from '@sendinblue/client';

const apiKey = process.env.BREVO_API_KEY || '';
const senderEmail = process.env.BREVO_SENDER_EMAIL || '';
const senderName = process.env.BREVO_SENDER_NAME || '';
const siteUrl = process.env.REACT_APP_SITE_URL || '';

if (!apiKey || !senderEmail || !senderName || !siteUrl) {
  throw new Error(
    'Missing Brevo API key, sender email, sender name, or site URL in environment variables.'
  );
}

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi(
  new SibApiV3Sdk.ApiClient().authentications['apiKey'] as any
);
apiInstance.authentications.apiKey.apiKey = apiKey;

export async function sendVerificationEmail(email: string, token: string, userId: string): Promise<void> {
  const emailTemplate = `
    <p>Hello,</p>
    <p>Thank you for registering. Please click on the following link to verify your account:</p>
    <p><a href="{{VERIFICATION_LINK}}">Verify Account</a></p>
    <p>Best regards,</p>
    <p>Your App Team</p>`;
  
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  const verificationLink = `${siteUrl}/verify?token=${token}&userId=${userId}`;

  sendSmtpEmail.subject = 'Verify Your Account';
  sendSmtpEmail.htmlContent = emailTemplate.replace('{{VERIFICATION_LINK}}', verificationLink);
  sendSmtpEmail.sender = { name: senderName, email: senderEmail };
  sendSmtpEmail.to = [{ email: email }];

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Error sending email: ${error}`);
  }
}