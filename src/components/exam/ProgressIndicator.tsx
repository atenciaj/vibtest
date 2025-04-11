import React from 'react';
import { Question } from '../../types/exam';

interface ProgressIndicatorProps {
  total: number;
  current: number;
  answers: Record<number, number>;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  total,
  current,
  answers
}) => {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from({ length: total }, (_, idx) => (
          <button
            key={idx}
            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
              idx === current
                ? 'bg-blue-600 text-white'
                : Object.keys(answers).length > 0 && answers[idx + 1] !== undefined
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}; 