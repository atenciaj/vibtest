import React from 'react';
import { Question } from '../../types/exam';
import { CheckCircle, XCircle } from 'lucide-react';

interface ReviewQuestionCardProps {
  question: Question;
  userAnswer: number;
  questionNumber: number;
}

export const ReviewQuestionCard: React.FC<ReviewQuestionCardProps> = ({
  question,
  userAnswer,
  questionNumber
}) => {
  const isCorrect = userAnswer === question.correctAnswer;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">Pregunta {questionNumber}</span>
          {isCorrect ? (
            <CheckCircle className="text-green-500" size={24} />
          ) : (
            <XCircle className="text-red-500" size={24} />
          )}
        </div>
        <span className="text-sm text-gray-500">
          Peso: {question.weight} puntos
        </span>
      </div>

      <p className="text-lg mb-4">{question.question}</p>

      {question.image && (
        <div className="mb-4">
          <img
            src={question.image}
            alt="Imagen de la pregunta"
            className="max-w-full h-auto rounded"
          />
        </div>
      )}

      <div className="space-y-2">
        {question.options.map((option, index) => {
          const isUserAnswer = index === userAnswer;
          const isCorrectAnswer = index === question.correctAnswer;

          return (
            <div
              key={index}
              className={`p-3 rounded ${
                isUserAnswer
                  ? isCorrectAnswer
                    ? 'bg-green-100 border border-green-500'
                    : 'bg-red-100 border border-red-500'
                  : isCorrectAnswer
                  ? 'bg-green-100 border border-green-500'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span>{option}</span>
                {isUserAnswer && !isCorrectAnswer && (
                  <span className="text-red-500 text-sm">(Tu respuesta)</span>
                )}
                {isCorrectAnswer && !isUserAnswer && (
                  <span className="text-green-500 text-sm">(Respuesta correcta)</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded">
        <h4 className="font-bold text-blue-800 mb-2">Explicación:</h4>
        <p className="text-blue-700">{question.explanation}</p>
      </div>
    </div>
  );
}; 