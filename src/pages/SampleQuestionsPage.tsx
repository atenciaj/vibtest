import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, X, BookOpen } from 'lucide-react';
import { questions } from '../data/questions';
import { Question } from '../types/exam';

// Solo mostramos 5 preguntas de muestra
const SAMPLE_QUESTIONS_COUNT = 5;

interface CourseInfo {
  id: string;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverColor: string;
  buttonColor: string;
  buttonHoverColor: string;
}

const courseInfo: Record<string, CourseInfo> = {
  'cat1': {
    id: 'cat1',
    title: 'Análisis de Vibraciones Categoría I',
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    hoverColor: 'hover:bg-blue-100',
    buttonColor: 'bg-blue-600',
    buttonHoverColor: 'hover:bg-blue-700'
  },
  'cat2': {
    id: 'cat2',
    title: 'Análisis de Vibraciones Categoría II',
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    hoverColor: 'hover:bg-green-100',
    buttonColor: 'bg-green-600',
    buttonHoverColor: 'hover:bg-green-700'
  },
  'cat3': {
    id: 'cat3',
    title: 'Análisis de Vibraciones Categoría III',
    color: 'yellow',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-500',
    hoverColor: 'hover:bg-yellow-100',
    buttonColor: 'bg-yellow-600',
    buttonHoverColor: 'hover:bg-yellow-700'
  },
  'cat4': {
    id: 'cat4',
    title: 'Análisis de Vibraciones Categoría IV',
    color: 'red',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-500',
    hoverColor: 'hover:bg-red-100',
    buttonColor: 'bg-red-600',
    buttonHoverColor: 'hover:bg-red-700'
  }
};

export const SampleQuestionsPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [sampleQuestions, setSampleQuestions] = useState<Question[]>([]);
  
  const course = courseId && courseInfo[courseId] ? courseInfo[courseId] : courseInfo['cat1'];
  
  useEffect(() => {
    // Tomar aleatoriamente 5 preguntas del total de preguntas
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setSampleQuestions(shuffled.slice(0, SAMPLE_QUESTIONS_COUNT));
  }, [courseId]);
  
  const handleAnswer = (questionId: number, answerIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const getCorrectAnswersCount = () => {
    return sampleQuestions.filter(q => 
      userAnswers[q.id] === q.correctAnswer
    ).length;
  };
  
  const handleRegisterClick = () => {
    navigate('/login');
  };
  
  const handleBackToCoursesClick = () => {
    navigate('/');
  };
  
  if (sampleQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (showResults) {
    const correctAnswers = getCorrectAnswersCount();
    const percentage = (correctAnswers / sampleQuestions.length) * 100;
    
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Resultados de la Prueba de Muestra</h1>
            <p className="text-gray-600">Has completado 5 preguntas de muestra</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full border-8 border-gray-200 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">{percentage.toFixed(0)}%</span>
              </div>
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle 
                  className="text-gray-200" 
                  strokeWidth="8" 
                  stroke="currentColor" 
                  fill="transparent" 
                  r="45" 
                  cx="50" 
                  cy="50" 
                />
                <circle 
                  className={`${percentage >= 70 ? 'text-green-500' : percentage >= 40 ? 'text-yellow-500' : 'text-red-500'}`}
                  strokeWidth="8" 
                  stroke="currentColor" 
                  fill="transparent" 
                  r="45" 
                  cx="50" 
                  cy="50" 
                  strokeDasharray={`${percentage * 2.83} 283`}
                  strokeDashoffset="0" 
                  transform="rotate(-90 50 50)" 
                />
              </svg>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl font-bold mb-2">Has respondido correctamente {correctAnswers} de {sampleQuestions.length} preguntas</p>
            <p className="text-gray-600">
              Esta es solo una muestra de las preguntas disponibles en el curso completo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {sampleQuestions.map((question, index) => (
              <div key={question.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-start mb-2">
                  <div className={`flex-shrink-0 mt-1 ${userAnswers[question.id] === question.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                    {userAnswers[question.id] === question.correctAnswer 
                      ? <CheckCircle size={20} />
                      : <X size={20} />
                    }
                  </div>
                  <div className="ml-2">
                    <p className="font-medium">Pregunta {index + 1}</p>
                    <p className="text-sm text-gray-600 mb-1">{question.question}</p>
                    <p className="text-sm">
                      <span className="font-medium">Tu respuesta:</span> {userAnswers[question.id] !== undefined ? question.options[userAnswers[question.id]] : 'No respondida'}
                    </p>
                    {userAnswers[question.id] !== question.correctAnswer && (
                      <p className="text-sm text-green-600">
                        <span className="font-medium">Respuesta correcta:</span> {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-lg mb-8">
            <BookOpen className="mx-auto mb-4 text-blue-600" size={40} />
            <h2 className="text-xl font-bold mb-2">¿Quieres continuar preparándote?</h2>
            <p className="text-gray-700 mb-4">
              Regístrate ahora para acceder al curso completo con más de 100 preguntas, 
              exámenes cronometrados y seguimiento detallado de tu progreso.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={handleRegisterClick}
                className={`py-3 px-6 rounded-md text-white font-medium ${course.buttonColor} ${course.buttonHoverColor}`}>
                Registrarme ahora
              </button>
              <button 
                onClick={handleBackToCoursesClick}
                className="py-3 px-6 rounded-md text-gray-700 font-medium border border-gray-300 hover:bg-gray-100">
                Volver a los cursos
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestion.id];
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">{course.title}</h1>
          <span className="text-gray-600">Preguntas de muestra • {currentQuestionIndex + 1}/{sampleQuestions.length}</span>
        </div>
        
        <div className="mb-8">
          <div className="bg-gray-100 h-2 rounded-full">
            <div 
              className={`h-2 rounded-full ${course.buttonColor}`}
              style={{ width: `${((currentQuestionIndex + 1) / sampleQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index}
                onClick={() => handleAnswer(currentQuestion.id, index)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  currentAnswer === index 
                    ? `${course.borderColor} ${course.bgColor}` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <div className={`h-5 w-5 rounded-full border-2 mr-3 flex-shrink-0 ${
                    currentAnswer === index 
                      ? course.borderColor
                      : 'border-gray-300'
                  } ${
                    currentAnswer === index 
                      ? course.buttonColor
                      : 'bg-white'
                  }`}
                  >
                    {currentAnswer === index && (
                      <div className="h-3 w-3 rounded-full bg-white m-auto"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-4 py-2 flex items-center rounded-md transition-colors
              ${currentQuestionIndex === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronLeft size={20} className="mr-1" />
            Anterior
          </button>
          
          <button
            onClick={handleNextQuestion}
            className={`px-6 py-2 text-white font-medium rounded-md ${course.buttonColor} ${course.buttonHoverColor} flex items-center`}
          >
            {currentQuestionIndex < sampleQuestions.length - 1 ? (
              <>Siguiente <ChevronRight size={20} className="ml-1" /></>
            ) : (
              'Ver resultados'
            )}
          </button>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
        <AlertCircle size={20} className="flex-shrink-0 text-yellow-500 mt-1" />
        <div className="ml-3">
          <p className="text-yellow-800 font-medium">Modo de prueba</p>
          <p className="text-yellow-700 text-sm">
            Estás respondiendo preguntas de muestra. Regístrate para acceder al curso completo.
          </p>
        </div>
      </div>
    </div>
  );
}; 