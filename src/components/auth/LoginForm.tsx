import React, { useState } from 'react';
import { LoginCredentials } from '../../types/auth';
import { User, Lock } from 'lucide-react';

interface LoginFormProps {
  onLogin: (credentials: LoginCredentials) => { success: boolean; message: string };
  onRegisterClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegisterClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      const result = onLogin({ username, password });
      
      if (!result.success) {
        setError(result.message);
      }
    } catch (err) {
      setError('Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Usuario
          </label>
          <div className="flex">
            <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 rounded-l-md">
              <User size={18} />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <div className="flex">
            <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 rounded-l-md">
              <Lock size={18} />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={username === 'admin' ? '9 dígitos para admin' : '4 dígitos para usuarios'}
              required
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {username === 'admin' ? 'Admin: 9 dígitos numéricos' : 'Usuario: 4 dígitos numéricos'}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">¿No tienes cuenta?</p>
        <button
          onClick={onRegisterClick}
          className="text-blue-600 hover:text-blue-800 font-semibold mt-2"
        >
          Regístrate aquí
        </button>
      </div>
    </div>
  );
}; 