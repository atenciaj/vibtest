const Brevo = require('@getbrevo/brevo');

exports.handler = async function(event, context) {
  // Solo permitir solicitudes POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    // Inicializar el cliente de Brevo
    const defaultClient = Brevo.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    // Parsear el cuerpo de la solicitud
    const { email, token, userId, firstName, lastName } = JSON.parse(event.body);
    
    // Obtener la URL base desde las variables de entorno
    const baseUrl = process.env.URL || 'https://tu-app.netlify.app';
    
    // Crear el enlace de verificación
    const verificationLink = `${baseUrl}/verify?token=${token}&userId=${userId}`;
    
    // Crear una instancia de la API
    const api = new Brevo.TransactionalEmailsApi();
    
    // Configurar el correo
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.subject = "Verifica tu cuenta en el Simulador de Examen de Vibraciones";
    sendSmtpEmail.htmlContent = `
      <h2>Hola ${firstName},</h2>
      <p>Gracias por registrarte en nuestro Simulador de Examen de Vibraciones.</p>
      <p>Para completar tu registro, haz clic en el siguiente enlace:</p>
      <p><a href="${verificationLink}">${verificationLink}</a></p>
      <p>Si no solicitaste este registro, puedes ignorar este correo.</p>
      <p>Saludos,<br>El equipo del Simulador de Examen de Vibraciones</p>
    `;
    sendSmtpEmail.sender = { 
      name: "Simulador de Vibraciones", 
      email: process.env.EMAIL_FROM_ADDRESS 
    };
    sendSmtpEmail.to = [{ 
      email: email, 
      name: `${firstName} ${lastName}` 
    }];
    
    // Enviar el correo
    await api.sendTransacEmail(sendSmtpEmail);
    
    // Devolver una respuesta exitosa
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Correo de verificación enviado correctamente' 
      })
    };
  } catch (error) {
    console.error('Error al enviar correo de verificación:', error);
    
    // Devolver el error
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: 'Error al enviar correo de verificación',
        details: error.message
      })
    };
  }
}; 