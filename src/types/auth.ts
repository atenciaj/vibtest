export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  country: string;
  isAdmin: boolean;
  isVerified: boolean;
  verificationToken?: string;
  examHistory: string[]; // IDs de exámenes realizados
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  country: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface VerificationData {
  token: string;
  userId: string;
} 