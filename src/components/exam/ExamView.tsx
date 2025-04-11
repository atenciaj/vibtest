import React from 'react';
import { QuestionCard } from './QuestionCard';
import { Timer } from './Timer';
import { ProgressIndicator } from './ProgressIndicator';
import { Question } from '../../types/exam';

interface ExamViewProps {
  questions: Question[];
  currentQuestion: number;
  timeLeft: number;
  userAnswers: Record<number, number>;
  onAnswer: (questionId: number, optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onFinish: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  questions,
  currentQuestion,
  timeLeft,
  userAnswers,
  onAnswer,
  onNext,
  onPrevious,
  onFinish
}) => {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 p-4 flex justify-between items-center border-b">
          <span className="font-semibold">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <Timer timeLeft={timeLeft} />
        </div>

        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={userAnswers[questions[currentQuestion].id]}
          onAnswer={onAnswer}
        />

        <div className="bg-gray-100 p-4 flex justify-between border-t">
          <button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Anterior
          </button>

          <div className="space-x-2">
            <button
              onClick={onFinish}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Finalizar
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
            </button>
          </div>
        </div>
      </div>

      <ProgressIndicator
        total={questions.length}
        current={currentQuestion}
        answers={userAnswers}
      />
    </div>
  );
}; 