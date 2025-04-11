import React from 'react';
import { Question } from '../../types/exam';
import { ReviewQuestionCard } from './ReviewQuestionCard';

interface ReviewViewProps {
  questions: Question[];
  userAnswers: Record<number, number>;
  onBack: () => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({
  questions,
  userAnswers,
  onBack
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Revisión del examen</h2>
        <button
          onClick={onBack}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver
        </button>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <ReviewQuestionCard
            key={question.id}
            question={question}
            userAnswer={userAnswers[question.id]}
            questionNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
}; 