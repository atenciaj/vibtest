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
    const { email } = JSON.parse(event.body);
    
    // Crear una instancia de la API
    const api = new Brevo.TransactionalEmailsApi();
    
    // Configurar el correo de prueba
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    sendSmtpEmail.subject = "Prueba de Brevo - Simulador de Vibraciones";
    sendSmtpEmail.htmlContent = `
      <h1>¡Prueba exitosa!</h1>
      <p>Si estás viendo este correo, significa que la configuración de Brevo está funcionando correctamente.</p>
      <p>Hora del envío: ${new Date().toLocaleString()}</p>
    `;
    sendSmtpEmail.sender = { 
      name: "Simulador de Vibraciones", 
      email: process.env.EMAIL_FROM_ADDRESS 
    };
    sendSmtpEmail.to = [{ 
      email: email, 
      name: "Usuario de Prueba" 
    }];
    
    // Enviar el correo
    await api.sendTransacEmail(sendSmtpEmail);
    
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