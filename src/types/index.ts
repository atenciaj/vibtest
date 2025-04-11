export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image?: React.ReactNode;
  weight?: number;
}

export interface ExamResult {
  id: number;
  name: string;
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  date: string;
  timeSpent: number;
  answers: Record<number, number>;
}

export interface ExamState {
  currentView: 'home' | 'exam' | 'results' | 'review' | 'history';
  examInProgress: boolean;
  currentQuestion: number;
  timeLeft: number;
  answers: Record<number, number>;
  examFinished: boolean;
  examResult: ExamResult | null;
  showExplanation: boolean;
  savedResults: ExamResult[];
  examName: string;
  showSaveDialog: boolean;
} 