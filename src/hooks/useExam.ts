import { useState, useEffect, useCallback } from 'react';
import { ExamState, Question, ExamResult } from '../types/exam';
import { useLocalStorage } from './useLocalStorage';

const INITIAL_TIME = 60 * 60; // 1 hora en segundos
const PASSING_SCORE = 70; // 70% para aprobar

export const useExam = (questions: Question[]) => {
  const [examState, setExamState] = useState<ExamState>({
    questions,
    currentQuestionIndex: 0,
    timeLeft: INITIAL_TIME,
    userAnswers: {},
    examInProgress: false,
    examFinished: false
  });

  const [results, setResults] = useLocalStorage<ExamResult[]>('examResults', []);

  const calculateResult = useCallback((): ExamResult => {
    const timeSpent = INITIAL_TIME - examState.timeLeft;
    let score = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    examState.questions.forEach(question => {
      const userAnswer = examState.userAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        score += question.weight;
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });

    const maxScore = examState.questions.reduce((sum, q) => sum + q.weight, 0);
    const percentage = (score / maxScore) * 100;

    return {
      id: Date.now().toString(),
      name: `Intento ${results.length + 1}`,
      date: new Date().toISOString(),
      score,
      maxScore,
      timeSpent,
      correctAnswers,
      incorrectAnswers,
      passed: percentage >= PASSING_SCORE,
      questions: examState.questions,
      userAnswers: examState.userAnswers
    };
  }, [examState, results.length]);

  const finishExam = useCallback(() => {
    const result = calculateResult();
    setExamState(prev => ({
      ...prev,
      examInProgress: false,
      examFinished: true,
      result
    }));
    setResults(prev => [...prev, result]);
  }, [calculateResult, setResults]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (examState.examInProgress && !examState.examFinished && examState.timeLeft > 0) {
      timer = setInterval(() => {
        setExamState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (examState.timeLeft === 0 && examState.examInProgress) {
      finishExam();
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [examState.examInProgress, examState.examFinished, examState.timeLeft, finishExam]);

  const startExam = useCallback(() => {
    setExamState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      timeLeft: INITIAL_TIME,
      userAnswers: {},
      examInProgress: true,
      examFinished: false
    }));
  }, []);

  const answerQuestion = useCallback((questionId: number, answerIndex: number) => {
    setExamState(prev => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [questionId]: answerIndex
      }
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setExamState(prev => ({
      ...prev,
      currentQuestionIndex: Math.min(prev.currentQuestionIndex + 1, prev.questions.length - 1)
    }));
  }, []);

  const previousQuestion = useCallback(() => {
    setExamState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(prev.currentQuestionIndex - 1, 0)
    }));
  }, []);

  const saveResult = useCallback((name: string) => {
    if (examState.result) {
      const updatedResult = {
        ...examState.result,
        name
      };
      setResults(prev => 
        prev.map(r => r.id === updatedResult.id ? updatedResult : r)
      );
    }
  }, [examState.result, setResults]);

  const deleteResult = useCallback((resultId: string) => {
    setResults(prev => prev.filter(r => r.id !== resultId));
  }, [setResults]);

  return {
    examState,
    results,
    startExam,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishExam,
    saveResult,
    deleteResult
  };
}; 