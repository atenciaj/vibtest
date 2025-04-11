import React from 'react';
import { User as UserIcon, LogOut } from 'lucide-react';
import { User } from '../../types/auth';

interface UserProfileProps {
  user: User;
  onLogout: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Perfil de Usuario</h2>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded flex items-center"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Cerrar Sesión
        </button>
      </div>
      
      <div className="mb-6 flex items-center">
        <div className="bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center mr-4">
          <UserIcon className="h-10 w-10 text-gray-500" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-600">{user.username}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Correo Electrónico</h4>
          <p>{user.email}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">País</h4>
          <p>{user.country}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Tipo de Cuenta</h4>
          <p>{user.isAdmin ? 'Administrador' : 'Usuario Regular'}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Estado</h4>
          <p className="text-green-600">Verificado</p>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <h4 className="text-lg font-semibold mb-2">Historial de Exámenes</h4>
        {user.examHistory.length > 0 ? (
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-gray-600">
              Has realizado {user.examHistory.length} exámenes
            </p>
          </div>
        ) : (
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-gray-600">
              Aún no has realizado ningún examen
            </p>
          </div>
        )}
      </div>
    </div>
  );
}; 