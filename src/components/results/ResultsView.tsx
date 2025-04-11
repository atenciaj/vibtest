import React, { useState } from 'react';
import { CheckCircle, XCircle, Save } from 'lucide-react';
import { ExamResult } from '../../types/exam';
import { SaveResultDialog } from './SaveResultDialog';

interface ResultsViewProps {
  result: ExamResult;
  onSave: (name: string) => void;
  examName: string;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  onSave,
  examName
}) => {
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [nameInput, setNameInput] = useState(examName);

  const handleSave = () => {
    onSave(nameInput);
    setShowSaveDialog(false);
  };

  // Función para formatear tiempo en formato MM:SS
  const formatTimeSpent = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Resultados del Examen</h2>
          
          <div className="mb-8">
            {result.passed ? (
              <div className="flex flex-col items-center">
                <CheckCircle className="h-20 w-20 text-green-500 mb-4" />
                <p className="text-xl font-semibold text-green-600">¡Felicidades! Has aprobado el examen</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <XCircle className="h-20 w-20 text-red-500 mb-4" />
                <p className="text-xl font-semibold text-red-600">No has aprobado el examen</p>
              </div>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Puntuación</h3>
              <p className="text-3xl font-bold">{result.score.toFixed(1)}/{result.maxScore}</p>
              <p className="text-gray-600">
                {((result.score / result.maxScore) * 100).toFixed(1)}%
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Respuestas correctas</h3>
              <p className="text-3xl font-bold">{result.correctAnswers}/{result.questions.length}</p>
              <p className="text-gray-600">
                {((result.correctAnswers / result.questions.length) * 100).toFixed(1)}% de exactitud
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Tiempo utilizado</h3>
              <p className="text-3xl font-bold">{formatTimeSpent(result.timeSpent)}</p>
              <p className="text-gray-600">De 1 hora disponible</p>
            </div>
          </div>
          
          <div className="mt-6 mb-8">
            <button 
              onClick={() => setShowSaveDialog(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded flex items-center justify-center mx-auto"
            >
              <Save className="h-5 w-5 mr-2" />
              Guardar resultado
            </button>
          </div>
        </div>
      </div>

      {showSaveDialog && (
        <SaveResultDialog
          examName={nameInput}
          onExamNameChange={setNameInput}
          onSave={handleSave}
          onClose={() => setShowSaveDialog(false)}
        />
      )}
    </div>
  );
}; 