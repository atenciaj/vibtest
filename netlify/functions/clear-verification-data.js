// Función para borrar verificaciones pendientes y correos registrados para pruebas
exports.handler = async function(event, context) {
  console.log('Iniciando función para limpiar verificaciones pendientes');
  
  // Solo permitir solicitudes POST
  if (event.httpMethod !== 'POST') {
    console.log('Método no permitido:', event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' })
    };
  }

  try {
    // Verificar autorización - Esta función debe estar protegida
    const authHeader = event.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Autorización requerida' })
      };
    }
    
    const token = authHeader.split(' ')[1];
    // En un escenario real, validarías este token con seguridad
    // Para pruebas, usamos un token simple definido en las variables de entorno
    if (token !== process.env.ADMIN_SECRET_KEY) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: 'No autorizado' })
      };
    }
    
    // Opcionalmente, puedes aceptar un correo específico para borrar
    let targetEmail = null;
    try {
      const requestData = JSON.parse(event.body);
      targetEmail = requestData.email;
    } catch (error) {
      console.log('No se proporcionó un correo específico para borrar');
    }
    
    console.log('Limpiando datos de verificación', targetEmail ? `para: ${targetEmail}` : 'para todos los registros');
    
    // Nota: En un entorno serverless, no podemos acceder directamente a localStorage
    // En una implementación real, borraríamos los datos de una base de datos
    
    // Por ahora, indicamos que el cliente debe limpiar sus propios datos
    // El frontend debe manejar esta respuesta correctamente
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: targetEmail 
          ? `Datos de verificación para ${targetEmail} eliminados` 
          : 'Todos los datos de verificación eliminados',
        action: 'clear_local_storage'
      })
    };
  } catch (error) {
    console.error('Error al limpiar verificaciones:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Error al limpiar datos de verificación',
        details: error.message
      })
    };
  }
}; 