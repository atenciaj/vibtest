import React, { useState, FormEvent } from 'react';
import { RegisterFormType } from '../../types'; 
import { User, Mail, MapPin, Lock } from 'lucide-react';




interface SendVerificationEmailResponse {
  success: boolean;
  message: string;
  messageId: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
}


interface RegisterFormProps {
  
  onLoginClick: () => void;

}

// Lista de países
const countries = [
  "Argentina", 
  "Bolivia", 
  "Brasil", 
  "Chile", 
  "Colombia", 
  "Costa Rica", 
  "Cuba", 
  "Ecuador", 
  "El Salvador",
  "Guatemala", 
  "Honduras", 
  "México", 
  "Nicaragua", 
  "Panamá", 
  "Paraguay", 
  "Perú", 
  "República Dominicana", 
  "Uruguay", 
  "Venezuela"
];

export const  RegisterForm: React.FC<RegisterFormProps> = ({ onLoginClick }) => {
  const [formData, setFormData] = useState<RegisterFormType>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    country: ''
  });
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: RegisterFormType) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validatePassword = (password: string) => {
    return /^\d{4}$/.test(password); 
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null)
    setSuccess(null)
    if (!validatePassword(formData.password)) {
      setError('La contraseña debe ser de 4 dígitos numéricos');
      return;
    }
    setIsLoading(true);
      try {
        const response = await fetch('/.netlify/functions/send-verification-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData) ,
        });
    
        const data: SendVerificationEmailResponse = await response.json();
    
        if (response.ok && data.success) {
          setSuccess('¡Registro exitoso! Por favor, revisa tu correo electrónico para verificar tu cuenta.');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            country: ''
          });
        } else {
          setError(data.message || 'Error al registrar usuario');
        }
      } catch (err) {
        setError('Error al registrar usuario, intente mas tarde');
      }
      finally{
        setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Nombre
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Apellido
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu apellido"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <div className="flex">
            <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 rounded-l-md">
              <Mail size={18} />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu.correo@ejemplo.com"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Nombre de Usuario
          </label>
          <div className="flex">
            <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 rounded-l-md">
              <User size={18} />
            </div>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre de usuario"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            País
          </label>
          <div className="flex">
            <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 rounded-l-md">
              <MapPin size={18} />
            </div>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecciona tu país</option>
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña (4 dígitos)
          </label>
          <div className="flex">
            <div className="bg-gray-100 flex items-center justify-center px-3 border border-r-0 rounded-l-md">
              <Lock size={18} />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="4 dígitos numéricos"
              maxLength={4}
              required
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            La contraseña debe ser de 4 dígitos numéricos
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">¿Ya tienes cuenta?</p>
        <button
          onClick={onLoginClick}
          className="text-blue-600 hover:text-blue-800 font-semibold mt-2"
        >
          Inicia sesión aquí
        </button>
      </div>
    </div>
  );
}; 