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
    // Validar que tenemos las variables de entorno necesarias
    if (!process.env.BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY no está configurada');
    }

    if (!process.env.EMAIL_FROM_ADDRESS) {
      throw new Error('EMAIL_FROM_ADDRESS no está configurada');
    }

    // Inicializar el cliente de Brevo
    const defaultClient = Brevo.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    // Parsear el cuerpo de la solicitud
    let requestData;
    try {
      requestData = JSON.parse(event.body);
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Cuerpo de la solicitud inválido' })
      };
    }

    const { email, token, userId, firstName, lastName } = requestData;

    // Validar campos requeridos
    if (!email || !token || !userId || !firstName || !lastName) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan campos requeridos' })
      };
    }
    
    // Obtener la URL base desde las variables de entorno o usar la URL de Netlify
    const baseUrl = process.env.SITE_URL || context.site.url;
    
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
    const result = await api.sendTransacEmail(sendSmtpEmail);
    console.log('Email enviado exitosamente:', result);
    
    // Devolver una respuesta exitosa
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Correo de verificación enviado correctamente' 
      })
    };
  } catch (error) {
    console.error('Error detallado:', error);
    
    // Devolver el error
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: 'Error al enviar correo de verificación',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
}; 