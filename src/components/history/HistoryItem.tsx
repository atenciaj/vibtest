import React from 'react';
import { ExamResult } from '../../types/exam';
import { Eye, Trash2 } from 'lucide-react';

interface HistoryItemProps {
  result: ExamResult;
  onView: (result: ExamResult) => void;
  onDelete: (result: ExamResult) => void;
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
  result,
  onView,
  onDelete
}) => {
  const formattedDate = new Date(result.date).toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">{result.name}</h3>
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onView(result)}
            className="p-2 text-blue-600 hover:text-blue-800"
            title="Ver detalles"
          >
            <Eye size={20} />
          </button>
          <button
            onClick={() => onDelete(result)}
            className="p-2 text-red-600 hover:text-red-800"
            title="Eliminar"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium">Puntuación:</span>{' '}
          <span className={result.passed ? 'text-green-600' : 'text-red-600'}>
            {result.score.toFixed(1)} / {result.maxScore}
          </span>
        </div>
        <div>
          <span className="font-medium">Tiempo:</span>{' '}
          <span>{Math.floor(result.timeSpent / 60)}:{(result.timeSpent % 60).toString().padStart(2, '0')}</span>
        </div>
        <div>
          <span className="font-medium">Correctas:</span>{' '}
          <span className="text-green-600">{result.correctAnswers}</span>
        </div>
        <div>
          <span className="font-medium">Incorrectas:</span>{' '}
          <span className="text-red-600">{result.incorrectAnswers}</span>
        </div>
      </div>
    </div>
  );
}; 