import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { 
  User, 
  LoginCredentials, 
  RegisterForm, 
  AuthState, 
  VerificationData 
} from '../types/auth';
import { v4 as uuidv4 } from 'uuid';

// Función para enviar correo de verificación usando la función serverless de Netlify
const sendVerificationEmail = async (email: string, token: string, userId: string, firstName: string, lastName: string) => {
  try {
    // Obtener la URL base desde las variables de entorno o usar el valor por defecto
    const baseUrl = process.env.REACT_APP_API_URL || window.location.origin;
    
    // En desarrollo, mostrar el correo en la consola
    if (process.env.NODE_ENV === 'development') {
      console.log(`
        ---------- EMAIL SIMULADO ----------
        Para: ${email}
        Asunto: Verifica tu cuenta en el Simulador de Examen de Vibraciones
        
        Hola ${firstName},
        
        Gracias por registrarte en nuestro Simulador de Examen de Vibraciones.
        Para completar tu registro, haz clic en el siguiente enlace:
        
        ${baseUrl}/verify?token=${token}&userId=${userId}
        
        Si no solicitaste este registro, puedes ignorar este correo.
        
        Saludos,
        El equipo del Simulador de Examen de Vibraciones
        -----------------------------------
      `);
      return Promise.resolve(true);
    }
    
    // En producción, usar la función serverless de Netlify con Brevo
    const response = await fetch('/.netlify/functions/send-verification-email', {
      method: 'POST',
      body: JSON.stringify({
        email,
        token,
        userId,
        firstName,
        lastName
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al enviar correo de verificación');
    }
    
    return Promise.resolve(true);
  } catch (error) {
    console.error('Error al enviar correo de verificación:', error);
    return Promise.reject(error);
  }
};

export const useAuth = () => {
  // Usar useRef para almacenar valores que no deben causar re-renderizados
  const initialized = useRef(false);
  
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  });
  
  const [users, setUsers] = useLocalStorage<User[]>('vibration_app_users', []);
  const [verifications, setVerifications] = useLocalStorage<VerificationData[]>('vibration_app_verifications', []);
  const [currentUser, setCurrentUser] = useLocalStorage<User | null>('vibration_app_current_user', null);
  
  // Inicializar el administrador si no existe - ejecuta solo una vez al montar
  useEffect(() => {
    // Si ya inicializamos, no hacer nada
    if (initialized.current) return;
    
    // Marcar como inicializado para no volver a entrar
    initialized.current = true;
    
    if (users.length === 0) {
      const adminUser: User = {
        id: uuidv4(),
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@vibracionesapp.com',
        username: 'admin',
        country: 'España',
        isAdmin: true,
        isVerified: true,
        examHistory: []
      };
      
      // En una app real, nunca guardaríamos la contraseña en texto plano
      // Esto es solo para la demo
      const adminPassword = '123456789';
      localStorage.setItem('vibration_app_admin_password', adminPassword);
      
      setUsers([adminUser]);
    }
  }, [users.length, setUsers]);
  
  // Este efecto separado solo actualiza el estado de autenticación
  useEffect(() => {
    setAuthState({
      user: currentUser,
      isAuthenticated: !!currentUser,
      isLoading: false,
      error: null
    });
  }, [currentUser]);
  
  const register = useCallback(async (formData: RegisterForm) => {
    try {
      // Validar que el password tenga 4 dígitos para usuarios regulares
      if (!formData.password.match(/^\d{4}$/)) {
        throw new Error('La contraseña debe ser de 4 dígitos numéricos');
      }
      
      // Verificar si el usuario ya existe
      const userExists = users.some(u => 
        u.username === formData.username || u.email === formData.email
      );
      
      if (userExists) {
        throw new Error('El nombre de usuario o correo ya está registrado');
      }
      
      // Crear token de verificación
      const token = uuidv4();
      const userId = uuidv4();
      
      // Crear nuevo usuario (sin verificar)
      const newUser: User = {
        id: userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username,
        country: formData.country,
        isAdmin: false,
        isVerified: false,
        verificationToken: token,
        examHistory: []
      };
      
      // Guardar el usuario y su password (en una app real, esto sería hasheado)
      localStorage.setItem(`vibration_app_password_${newUser.id}`, formData.password);
      
      // Añadir a los usuarios y verificaciones pendientes
      const updatedUsers = [...users, newUser];
      const updatedVerifications = [...verifications, { token, userId }];
      
      setUsers(updatedUsers);
      setVerifications(updatedVerifications);
      
      // Enviar correo de verificación
      await sendVerificationEmail(formData.email, token, userId, formData.firstName, formData.lastName);
      
      return { success: true, message: 'Registro exitoso. Por favor verifica tu correo electrónico.' };
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : 'Error desconocido al registrar' };
    }
  }, [users, setUsers, verifications, setVerifications]);
  
  const verifyUser = useCallback((verificationData: VerificationData) => {
    try {
      // Buscar la verificación
      const verificationExists = verifications.find(
        v => v.token === verificationData.token && v.userId === verificationData.userId
      );
      
      if (!verificationExists) {
        throw new Error('Token de verificación inválido o expirado');
      }
      
      // Actualizar el usuario
      const updatedUsers = users.map(user => {
        if (user.id === verificationData.userId) {
          return { ...user, isVerified: true, verificationToken: undefined };
        }
        return user;
      });
      
      // Eliminar la verificación
      const filteredVerifications = verifications.filter(
        v => v.token !== verificationData.token || v.userId !== verificationData.userId
      );
      
      setUsers(updatedUsers);
      setVerifications(filteredVerifications);
      
      // Auto login después de verificación
      const verifiedUser = updatedUsers.find(u => u.id === verificationData.userId);
      if (verifiedUser) {
        setCurrentUser(verifiedUser);
      }
      
      return { success: true, message: 'Cuenta verificada exitosamente' };
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : 'Error al verificar la cuenta' };
    }
  }, [users, setUsers, verifications, setVerifications, setCurrentUser]);
  
  const login = useCallback((credentials: LoginCredentials) => {
    try {
      // Verificar si es admin
      const isAdmin = credentials.username === 'admin';
      
      if (isAdmin) {
        // Validar password de administrador (9 dígitos)
        const adminPassword = localStorage.getItem('vibration_app_admin_password');
        
        if (credentials.password !== adminPassword) {
          throw new Error('Credenciales de administrador incorrectas');
        }
        
        const adminUser = users.find(u => u.username === 'admin');
        
        if (adminUser) {
          setCurrentUser(adminUser);
          return { success: true, message: 'Inicio de sesión exitoso como administrador' };
        }
      } else {
        // Login de usuario normal
        const user = users.find(u => u.username === credentials.username);
        
        if (!user) {
          throw new Error('Usuario no encontrado');
        }
        
        if (!user.isVerified) {
          throw new Error('Tu cuenta aún no ha sido verificada. Por favor revisa tu correo.');
        }
        
        // Verificar password
        const userPassword = localStorage.getItem(`vibration_app_password_${user.id}`);
        
        if (credentials.password !== userPassword) {
          throw new Error('Contraseña incorrecta');
        }
        
        setCurrentUser(user);
        return { success: true, message: 'Inicio de sesión exitoso' };
      }
      
      throw new Error('Error inesperado en el inicio de sesión');
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Error desconocido al iniciar sesión',
        isLoading: false
      }));
      
      return { success: false, message: error instanceof Error ? error.message : 'Error desconocido al iniciar sesión' };
    }
  }, [users, setCurrentUser]);
  
  const logout = useCallback(() => {
    setCurrentUser(null);
  }, [setCurrentUser]);
  
  const updateUserExamHistory = useCallback((examId: string) => {
    if (!authState.user) return;
    
    const updatedUser = {
      ...authState.user,
      examHistory: [...authState.user.examHistory, examId]
    };
    
    // Actualizar en el listado de usuarios
    const updatedUsers = users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    );
    
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
  }, [authState.user, users, setUsers, setCurrentUser]);
  
  return {
    ...authState,
    register,
    login,
    logout,
    verifyUser,
    updateUserExamHistory
  };
}; 