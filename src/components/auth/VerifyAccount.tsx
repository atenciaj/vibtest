import React, { useEffect, useState } from 'react';
import { VerificationData } from '../../types/auth';
import { CheckCircle, XCircle } from 'lucide-react';

interface VerifyAccountProps {
  token: string;
  userId: string;
  onVerify: (verificationData: VerificationData) => { success: boolean; message: string };
  onNavigateToLogin: () => void;
}

export const VerifyAccount: React.FC<VerifyAccountProps> = ({
  token,
  userId,
  onVerify,
  onNavigateToLogin
}) => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verificando tu cuenta...');
  
  useEffect(() => {
    const verifyAccount = () => {
      try {
        console.log(`Verificando cuenta con token: ${token} y userId: ${userId}`);
        
        const result = onVerify({ token, userId });
        console.log('Resultado de verificación:', result);
        
        if (result.success) {
          setStatus('success');
        } else {
          setStatus('error');
        }
        
        setMessage(result.message);
      } catch (err) {
        console.error('Error al verificar cuenta:', err);
        setStatus('error');
        setMessage('Ocurrió un error al verificar tu cuenta');
      }
    };
    
    // Simular una pequeña demora para mostrar el estado de carga
    const timer = setTimeout(() => {
      verifyAccount();
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [token, userId, onVerify]);
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Verificación de Cuenta</h2>
      
      {/* Debug info para desarrollo */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-4 text-left text-xs bg-gray-100 p-2 rounded">
          <p><strong>Token:</strong> {token}</p>
          <p><strong>UserID:</strong> {userId}</p>
          <p><strong>Status:</strong> {status}</p>
        </div>
      )}
      
      <div className="mb-6 flex flex-col items-center">
        {status === 'loading' && (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        )}
        
        {status === 'success' && (
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        )}
        
        {status === 'error' && (
          <XCircle className="h-16 w-16 text-red-500 mb-4" />
        )}
        
        <p className={`text-lg ${
          status === 'success' 
            ? 'text-green-600' 
            : status === 'error' 
              ? 'text-red-600' 
              : 'text-gray-600'
        }`}>
          {message}
        </p>
      </div>
      
      {status !== 'loading' && (
        <button
          onClick={onNavigateToLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Ir a Iniciar Sesión
        </button>
      )}
    </div>
  );
}; 