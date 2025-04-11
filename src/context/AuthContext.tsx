import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { useAuth as useAuthHook } from '../hooks/useAuth';
import { User, LoginCredentials, RegisterForm, VerificationData } from '../types/auth';

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
  const contextValue = useMemo(() => auth, [
    auth.user,
    auth.isAuthenticated,
    auth.isLoading,
    auth.error
  ]);
  
  return (
    <AuthContext.Provider value={contextValue}>
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