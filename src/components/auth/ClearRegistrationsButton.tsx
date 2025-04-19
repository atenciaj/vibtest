import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Trash } from 'lucide-react';

export const ClearRegistrationsButton: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleClearRegistrations = async () => {
    if (!user?.isAdmin) {
      setMessage('No tienes permisos para realizar esta acción');
      return;
    }

    if (window.confirm('¿Estás seguro que deseas borrar todas las verificaciones pendientes? Esta acción no se puede deshacer.')) {
      setLoading(true);
      setMessage(null);

      try {
        // Limpiar datos de localStorage para pruebas
        localStorage.removeItem('vibration_app_users');
        localStorage.removeItem('vibration_app_verifications');
        
        // Mantener el usuario admin
        const adminUser = user;
        const users = [adminUser];
        localStorage.setItem('vibration_app_users', JSON.stringify(users));
        
        // También podríamos llamar a la función serverless si estamos en producción
        /*
        await fetch('/.netlify/functions/clear-verification-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_ADMIN_KEY}`
          }
        });
        */
        
        setMessage('Registros borrados correctamente');
        
        // Recargar la página para refrescar todos los datos
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        console.error('Error al borrar registros:', error);
        setMessage('Error al borrar registros');
      } finally {
        setLoading(false);
      }
    }
  };

  if (!user?.isAdmin) {
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <button
        onClick={handleClearRegistrations}
        disabled={loading}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
      >
        <Trash size={16} />
        {loading ? 'Borrando...' : 'Borrar registros de prueba'}
      </button>
      
      {message && (
        <div className={`mt-2 text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </div>
      )}
    </div>
  );
}; 