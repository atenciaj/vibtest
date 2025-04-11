import React from 'react';
import { ExamResult } from '../../types/exam';
import { HistoryItem } from './HistoryItem';

interface HistoryViewProps {
  results: ExamResult[];
  onViewResult: (result: ExamResult) => void;
  onDeleteResult: (result: ExamResult) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  results,
  onViewResult,
  onDeleteResult
}) => {
  if (results.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Historial de exámenes</h2>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">No hay resultados guardados</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Historial de exámenes</h2>
      <div className="space-y-4">
        {results.map((result) => (
          <HistoryItem
            key={result.id}
            result={result}
            onView={onViewResult}
            onDelete={onDeleteResult}
          />
        ))}
      </div>
    </div>
  );
}; 