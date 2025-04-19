const Brevo = require('@getbrevo/brevo');

exports.handler = async function(event, context) {
  console.log('Iniciando función de envío de correo');
  
  // Solo permitir solicitudes POST
  if (event.httpMethod !== 'POST') {
    console.log('Método no permitido:', event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    // Validar que tenemos las variables de entorno necesarias
    console.log('Verificando variables de entorno...');
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY no está configurada');
      throw new Error('BREVO_API_KEY no está configurada');
    }

    // Parsear el cuerpo de la solicitud
    let requestData;
    try {
      requestData = JSON.parse(event.body);
      console.log('Datos recibidos:', {
        email: requestData.email,
        firstName: requestData.firstName,
        lastName: requestData.lastName,
      });
    } catch (error) {
      console.error('Error al parsear el cuerpo de la solicitud:', error);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Cuerpo de la solicitud inválido' })
      };
    }

    const { email, token, userId, firstName, lastName } = requestData;

    // Validar campos requeridos
    if (!email || !token || !userId || !firstName || !lastName) {
      console.error('Faltan campos requeridos:', { email, firstName, lastName });
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Faltan campos requeridos' })
      };
    }
    
    // Obtener la URL base desde las variables de entorno o usar la URL de Netlify
    const baseUrl = process.env.SITE_URL || context.site.url;
    console.log('URL base:', baseUrl);
    
    // Crear el enlace de verificación
    const verificationLink = `${baseUrl}/verify?token=${token}&userId=${userId}`;
    console.log('Enlace de verificación generado');
    
    // Configurar cliente Brevo según documentación oficial
    const defaultClient = Brevo.ApiClient.instance;
    defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;
    
    const apiInstance = new Brevo.TransactionalEmailsApi();
    
    // Crea la solicitud utilizando SendSmtpEmail según documentación
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    
    sendSmtpEmail.sender = {
      name: "Simulador de Vibraciones",
      email: "admin@vib-test.ltd"
    };
    
    sendSmtpEmail.to = [{
      email: email,
      name: `${firstName} ${lastName}`
    }];
    
    sendSmtpEmail.subject = "Verifica tu cuenta en el Simulador de Examen de Vibraciones";
    
    sendSmtpEmail.htmlContent = `
      <html>
        <head></head>
        <body>
          <h2>Hola ${firstName},</h2>
          <p>Gracias por registrarte en nuestro Simulador de Examen de Vibraciones.</p>
          <p>Para completar tu registro, haz clic en el siguiente enlace:</p>
          <p><a href="${verificationLink}">${verificationLink}</a></p>
          <p>Si no solicitaste este registro, puedes ignorar este correo.</p>
          <p>Saludos,<br>El equipo del Simulador de Examen de Vibraciones</p>
        </body>
      </html>
    `;
    
    // Agregar tags para seguimiento
    sendSmtpEmail.tags = ["registro", "verificacion"];
    
    console.log('Enviando correo a través de Brevo API...');
    
    // Enviar el correo utilizando la API de Brevo
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email enviado exitosamente:', result);
    
    // Devolver una respuesta exitosa
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Correo de verificación enviado correctamente',
        messageId: result.messageId
      })
    };
  } catch (error) {
    console.error('Error detallado:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.text,
      config: error.config
    });
    
    // Devolver el error
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: 'Error al enviar correo de verificación',
        details: error.message,
        response: error.response?.text,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
}; 