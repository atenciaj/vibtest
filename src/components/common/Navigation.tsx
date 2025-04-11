import React from 'react';
import { Home, ClipboardList, PieChart, FileSearch, User, LogOut } from 'lucide-react';
import { User as UserType } from '../../types/auth';
import { View } from '../../types/exam';

interface NavigationProps {
  currentView: View | 'profile';
  examInProgress: boolean;
  examFinished: boolean;
  onViewChange: (view: View | 'profile') => void;
  user: UserType | null;
  onProfileClick: () => void;
  selectedCourse?: string;
}

type CourseNames = {
  [key: string]: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  examInProgress,
  examFinished,
  onViewChange,
  user,
  onProfileClick,
  selectedCourse
}) => {
  const getCourseInfo = () => {
    const courses: CourseNames = {
      'cat1': 'Análisis de Vibraciones Categoría I',
      'cat2': 'Análisis de Vibraciones Categoría II',
      'cat3': 'Análisis de Vibraciones Categoría III',
      'cat4': 'Análisis de Vibraciones Categoría IV'
    };
    
    if (selectedCourse && courses[selectedCourse]) {
      return courses[selectedCourse];
    }
    
    return 'Simulador de Examen de Vibraciones';
  };
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-blue-700">{getCourseInfo()}</span>
          </div>
          
          <div className="flex space-x-1">
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentView === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onViewChange('home')}
            >
              <div className="flex flex-col items-center">
                <Home size={18} />
                <span className="mt-1">Inicio</span>
              </div>
            </button>
            
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentView === 'history' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onViewChange('history')}
              disabled={examInProgress}
            >
              <div className="flex flex-col items-center">
                <ClipboardList size={18} />
                <span className="mt-1">Historial</span>
              </div>
            </button>
            
            {examFinished && (
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentView === 'results' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => onViewChange('results')}
              >
                <div className="flex flex-col items-center">
                  <PieChart size={18} />
                  <span className="mt-1">Resultados</span>
                </div>
              </button>
            )}
            
            {examFinished && (
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentView === 'review' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => onViewChange('review')}
              >
                <div className="flex flex-col items-center">
                  <FileSearch size={18} />
                  <span className="mt-1">Revisión</span>
                </div>
              </button>
            )}
            
            <div className="relative px-1 ml-2">
              <button
                className={`flex items-center text-gray-700 hover:bg-gray-100 rounded-md px-3 py-2`}
                onClick={onProfileClick}
              >
                <div className="flex flex-col items-center">
                  <User size={18} />
                  <span className="mt-1">{user?.firstName || 'Perfil'}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 