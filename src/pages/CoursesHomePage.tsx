import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, BarChart2, BookMarked } from 'lucide-react';

interface CoursesHomePageProps {
  onCourseSelect: (courseId: string) => void;
}

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  level: number;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, icon, level, onClick }) => {
  // Determinar el color basado en el nivel
  const getBgColor = () => {
    switch (level) {
      case 1: return 'bg-blue-50 border-blue-200 hover:bg-blue-100';
      case 2: return 'bg-green-50 border-green-200 hover:bg-green-100';
      case 3: return 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100';
      case 4: return 'bg-red-50 border-red-200 hover:bg-red-100';
      default: return 'bg-gray-50 border-gray-200 hover:bg-gray-100';
    }
  };

  const getIconColor = () => {
    switch (level) {
      case 1: return 'text-blue-600';
      case 2: return 'text-green-600';
      case 3: return 'text-yellow-600';
      case 4: return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getButtonColor = () => {
    switch (level) {
      case 1: return 'bg-blue-600 hover:bg-blue-700';
      case 2: return 'bg-green-600 hover:bg-green-700';
      case 3: return 'bg-yellow-600 hover:bg-yellow-700';
      case 4: return 'bg-red-600 hover:bg-red-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div className={`border-2 rounded-lg p-6 transition-all duration-300 ${getBgColor()}`}>
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${getIconColor()} bg-opacity-20`}>
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center">
          <Award className="text-yellow-500 mr-1" size={18} />
          <span className="text-sm font-medium">Nivel {level}</span>
        </div>
        <div className="flex items-center">
          <BarChart2 className="text-blue-500 mr-1" size={18} />
          <span className="text-sm font-medium">25 preguntas</span>
        </div>
      </div>
      <button 
        onClick={onClick}
        className={`w-full py-3 px-4 rounded-md text-white font-medium ${getButtonColor()}`}>
        Comenzar prueba
      </button>
    </div>
  );
};

export const CoursesHomePage: React.FC<CoursesHomePageProps> = ({ onCourseSelect }) => {
  const navigate = useNavigate();
  
  const handleCourseClick = (courseId: string) => {
    onCourseSelect(courseId);
    navigate(`/sample-questions/${courseId}`);
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Simuladores de Test de Vibración</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Elige la categoría en la que deseas practicar y prepárate para certificarte como analista de vibraciones.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CourseCard 
          id="cat1"
          title="Análisis de Vibraciones Categoría I" 
          description="Curso básico que cubre los fundamentos del análisis de vibraciones, mediciones y diagnóstico básico de maquinaria." 
          icon={<BookOpen size={24} />}
          level={1}
          onClick={() => handleCourseClick('cat1')}
        />
        
        <CourseCard 
          id="cat2"
          title="Análisis de Vibraciones Categoría II" 
          description="Nivel intermedio que profundiza en el procesamiento de señales, análisis espectral y diagnóstico de fallas comunes." 
          icon={<BookMarked size={24} />}
          level={2}
          onClick={() => handleCourseClick('cat2')}
        />
        
        <CourseCard 
          id="cat3"
          title="Análisis de Vibraciones Categoría III" 
          description="Nivel avanzado que incluye análisis modal, órbitas, análisis de fase y técnicas avanzadas de diagnóstico." 
          icon={<BarChart2 size={24} />}
          level={3}
          onClick={() => handleCourseClick('cat3')}
        />
        
        <CourseCard 
          id="cat4"
          title="Análisis de Vibraciones Categoría IV" 
          description="Nivel experto que cubre análisis de sistemas complejos, corrección de maquinaria y gestión de programas de monitoreo." 
          icon={<Award size={24} />}
          level={4}
          onClick={() => handleCourseClick('cat4')}
        />
      </div>
      
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Cómo funciona?</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold mb-2">1. Elige un curso</h3>
            <p className="text-gray-600">Selecciona la categoría que deseas practicar según tu nivel de experiencia.</p>
          </div>
          <div className="flex-1 border-l-4 border-green-500 pl-4">
            <h3 className="font-bold mb-2">2. Prueba gratis</h3>
            <p className="text-gray-600">Responde a 5 preguntas de muestra sin necesidad de registrarte.</p>
          </div>
          <div className="flex-1 border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold mb-2">3. Regístrate</h3>
            <p className="text-gray-600">Crea una cuenta para acceder a exámenes completos y seguir tu progreso.</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 