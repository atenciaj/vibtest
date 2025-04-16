const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

exports.handler = async function(event, context) {
  // Solo permitir solicitudes POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    // Inicializar MailerSend con tu API key
    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });
    
    // Configurar el remitente
    const sentFrom = new Sender(
      "noreply@vibtest.com",  // Reemplaza con tu correo verificado
      "Simulador de Vibraciones"
    );
    
    // Configurar el destinatario (se enviará al correo proporcionado en el body)
    const recipients = [
      new Recipient("test@example.com", "Usuario de Prueba")  // Se reemplazará con el correo proporcionado
    ];
    
    // Configurar el correo
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Prueba de Correo - Simulador de Vibraciones')
      .setHtml(`
        <h1>¡Prueba exitosa!</h1>
        <p>Si estás viendo este correo, significa que la configuración de MailerSend está funcionando correctamente.</p>
        <p>Hora del envío: ${new Date().toLocaleString()}</p>
      `)
      .setText(`
        ¡Prueba exitosa!
        
        Si estás viendo este correo, significa que la configuración de MailerSend está funcionando correctamente.
        
        Hora del envío: ${new Date().toLocaleString()}
      `);
    
    // Enviar el correo
    await mailerSend.email.send(emailParams);
    
    // Devolver una respuesta exitosa
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Correo de prueba enviado correctamente' 
      })
    };
  } catch (error) {
    console.error('Error al enviar correo de prueba:', error);
    
    // Devolver el error
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: 'Error al enviar correo de prueba',
        details: error.message
      })
    };
  }
}; 