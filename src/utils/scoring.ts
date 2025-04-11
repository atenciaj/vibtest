import { Question } from '../types';

export const calculateScore = (answers: Record<number, number>, questions: Question[]) => {
  let totalScore = 0;
  let maxScore = 0;

  questions.forEach(q => {
    const weight = q.weight || 1;
    maxScore += weight;

    if (answers[q.id] === q.correctAnswer) {
      totalScore += weight;
    }
  });

  return {
    correctCount: Object.entries(answers).filter(
      ([id, answer]) => questions.find(q => q.id === Number(id))?.correctAnswer === answer
    ).length,
    totalQuestions: questions.length,
    score: totalScore,
    maxScore,
    percentage: (totalScore / maxScore) * 100
  };
}; 