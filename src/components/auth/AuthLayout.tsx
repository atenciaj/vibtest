import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegisterFormComponent } from './RegisterForm';
import { useAuth } from '../../context/AuthContext';
import { LoginCredentials, RegisterForm as RegisterFormType } from '../../types/auth';

interface AuthLayoutProps {
  children?: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Usar useEffect para navegar cuando cambie isAuthenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);
  
  // Usar useCallback para evitar regenerar estas funciones cada render
  const handleLogin = useCallback((credentials: LoginCredentials) => {
    return login(credentials);
  }, [login]);
  
  const handleRegister = useCallback(async (formData: RegisterFormType) => {
    return await register(formData);
  }, [register]);
  
  const handleModeSwitch = useCallback((newMode: 'login' | 'register') => {
    setMode(newMode);
  }, []);
  
  // Si está autenticado, no renderizar nada (el useEffect se encargará de la navegación)
  if (isAuthenticated) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {mode === 'login' ? (
          <LoginForm 
            onLogin={handleLogin} 
            onRegisterClick={() => handleModeSwitch('register')} 
          />
        ) : (
          <RegisterFormComponent 
            onRegister={handleRegister} 
            onLoginClick={() => handleModeSwitch('login')} 
          />
        )}
      </div>
    </div>
  );
}; 