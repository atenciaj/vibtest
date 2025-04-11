import React from 'react';
import { Question } from '../../types/exam';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onAnswer: (questionId: number, optionIndex: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswer
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
      
      {question.image && (
        <div className="mb-6 p-4 bg-gray-50 rounded-md flex justify-center">
          <div className="w-full max-w-md">
            <img src={question.image} alt="Imagen de la pregunta" className="max-w-full h-auto" />
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <div 
            key={index}
            className={`p-4 border rounded-md cursor-pointer transition-colors ${
              selectedAnswer === index 
                ? 'bg-blue-50 border-blue-500' 
                : 'hover:bg-gray-50 border-gray-200'
            }`}
            onClick={() => onAnswer(question.id, index)}
          >
            <div className="flex items-start">
              <div className={`h-5 w-5 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${
                selectedAnswer === index 
                  ? 'border-blue-500 bg-blue-500' 
                  : 'border-gray-400'
              }`}>
                {selectedAnswer === index && (
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                )}
              </div>
              <span>{option}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 