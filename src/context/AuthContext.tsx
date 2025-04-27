import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { useAuth as useAuthHook } from '../hooks/useAuth';
import { User, LoginCredentials, VerificationData } from '../types/auth';
import { RegisterForm } from '../types/form';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => { success: boolean; message: string };
  logout: () => void;
  register: (formData: RegisterForm) => Promise<{ success: boolean; message: string }>;
  verifyUser: (verificationData: VerificationData) => { success: boolean; message: string };
  updateUserExamHistory: (examId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthHook();
  
  // Usar useMemo para evitar recreaciones innecesarias del valor del contexto
  const value = useMemo(() => ({
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    error: auth.error,
    login: auth.login,
    logout: auth.logout,
    register: auth.register,
    verifyUser: auth.verifyUser,
    updateUserExamHistory: auth.updateUserExamHistory
  }), [auth]);
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
} 