// Store the data in memory temporarily
const verificationDataStore = {};

exports.handler = async function(event, context) {
  console.log('Iniciando función para verificar usuario');
  console.log('Evento recibido:', JSON.stringify(event));

  // Solo permitir solicitudes GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Método no permitido', action: 'error' })
    };
  }

  // Obtener token y userId de los query parameters
  const token = event.queryStringParameters.token;
  const userId = event.queryStringParameters.userId;

  // Validar que el token y userId existen
  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: 'Token requerido', action: 'error' })
    }
  }

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: 'User ID requerido', action: 'error' })
    }
  }

  // Verificar si el userId existe en el store
  if (!verificationDataStore[userId]) {
    return {
      statusCode: 404,
      body: JSON.stringify({ success: false, message: 'User ID no encontrado', action: 'error' })
    }
  }

  // Verificar si el token coincide con el almacenado
  if (verificationDataStore[userId].token !== token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ success: false, message: 'Token inválido', action: 'error' })
    }
  }

  try{
      // Si todo está bien, eliminar los datos del usuario en el store
      console.log('Eliminando datos del usuario:', userId);
      delete verificationDataStore[userId];
      console.log("Usuario verificado y datos eliminados");

      // Devolver una respuesta exitosa
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Usuario verificado exitosamente',
        action: 'verified'
      })
    };
  } catch(error){
     console.error('Error al procesar la verificación:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Error al procesar la verificación',
        action: 'error'
      })
    }
  }