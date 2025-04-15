const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

// Función principal que Netlify ejecutará
exports.handler = async function(event, context) {
  // Solo permitir solicitudes POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    // Parsear el cuerpo de la solicitud
    const { email, token, userId, firstName, lastName } = JSON.parse(event.body);
    
    // Obtener la URL base desde las variables de entorno o usar el valor por defecto
    const baseUrl = process.env.URL || 'https://tu-app.netlify.app';
    
    // Inicializar MailerSend con tu API key
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });
    
    // Configurar el remitente
    const sentFrom = new Sender(
      process.env.EMAIL_FROM_ADDRESS || 'noreply@tu-dominio.com',
      process.env.EMAIL_FROM_NAME || 'Simulador de Vibraciones'
    );
    
    // Configurar el destinatario
    const recipients = [
      new Recipient(email, `${firstName} ${lastName}`)
    ];
    
    // Crear el enlace de verificación
    const verificationLink = `${baseUrl}/verify?token=${token}&userId=${userId}`;
    
    // Configurar los parámetros del correo
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Verifica tu cuenta en el Simulador de Examen de Vibraciones')
      .setHtml(`
        <h2>Hola ${firstName},</h2>
        <p>Gracias por registrarte en nuestro Simulador de Examen de Vibraciones.</p>
        <p>Para completar tu registro, haz clic en el siguiente enlace:</p>
        <p><a href="${verificationLink}">${verificationLink}</a></p>
        <p>Si no solicitaste este registro, puedes ignorar este correo.</p>
        <p>Saludos,<br>El equipo del Simulador de Examen de Vibraciones</p>
      `)
      .setText(`
        Hola ${firstName},
        
        Gracias por registrarte en nuestro Simulador de Examen de Vibraciones.
        Para completar tu registro, haz clic en el siguiente enlace:
        
        ${verificationLink}
        
        Si no solicitaste este registro, puedes ignorar este correo.
        
        Saludos,
        El equipo del Simulador de Examen de Vibraciones
      `);
    
    // Enviar el correo
    await mailerSend.email.send(emailParams);
    
    // Devolver una respuesta exitosa
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Correo enviado correctamente' })
    };
  } catch (error) {
    console.error('Error al enviar correo:', error);
    
    // Devolver un error
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: 'Error al enviar correo',
        details: error.message
      })
    };
  }
}; 