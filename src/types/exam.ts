export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  weight: number;
  image?: string;
}

export interface ExamResult {
  id: string;
  name: string;
  date: string;
  score: number;
  maxScore: number;
  timeSpent: number;
  correctAnswers: number;
  incorrectAnswers: number;
  passed: boolean;
  questions: Question[];
  userAnswers: Record<number, number>;
}

export interface ExamState {
  questions: Question[];
  currentQuestionIndex: number;
  timeLeft: number;
  userAnswers: Record<number, number>;
  examInProgress: boolean;
  examFinished: boolean;
  result?: ExamResult;
}

export type View = 'home' | 'exam' | 'results' | 'review' | 'history'; 