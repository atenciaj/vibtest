import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/common/Navigation';
import { ExamView } from './components/exam/ExamView';
import { ResultsView } from './components/results/ResultsView';
import { ReviewView } from './components/review/ReviewView';
import { HistoryView } from './components/history/HistoryView';
import { useExam } from './hooks/useExam';
import { questions } from './data/questions';
import { View, ExamResult } from './types/exam';
import { AuthLayout } from './components/auth/AuthLayout';
import { UserProfile } from './components/auth/UserProfile';
import { VerifyPage } from './pages/VerifyPage';
import { useAuth } from './context/AuthContext';
import { CoursesHomePage } from './pages/CoursesHomePage';
import { SampleQuestionsPage } from './pages/SampleQuestionsPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View | 'profile'>('home');
  const { user, isAuthenticated, logout, updateUserExamHistory } = useAuth();
  
  const {
    examState,
    results,
    startExam,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishExam,
    saveResult,
    deleteResult
  } = useExam(questions);

  const handleViewChange = (view: View | 'profile') => {
    setCurrentView(view);
  };

  const handleFinishExam = () => {
    finishExam();
    setCurrentView('results');
  };

  const handleSaveResult = (name: string) => {
    saveResult(name);
    
    // Actualizar el historial del usuario si está autenticado
    if (isAuthenticated && user && examState.result) {
      updateUserExamHistory(examState.result.id);
    }
    
    setCurrentView('history');
  };

  const handleViewResult = (result: ExamResult) => {
    setCurrentView('review');
  };

  const handleDeleteResult = (result: ExamResult) => {
    deleteResult(result.id);
  };
  
  const renderContent = () => {
    switch (currentView) {
      case 'profile':
        return (
          <div className="max-w-4xl mx-auto p-4">
            <UserProfile user={user!} onLogout={logout} />
          </div>
        );
        
      case 'home':
        return (
          <CoursesHomePage />
        );

      case 'exam':
        return (
          <ExamView
            questions={examState.questions}
            currentQuestion={examState.currentQuestionIndex}
            timeLeft={examState.timeLeft}
            userAnswers={examState.userAnswers}
            onAnswer={answerQuestion}
            onNext={nextQuestion}
            onPrevious={previousQuestion}
            onFinish={handleFinishExam}
          />
        );

      case 'results':
        if (!examState.result) return null;
        return (
          <ResultsView
            result={examState.result}
            onSave={handleSaveResult}
            examName={`Intento ${results.length + 1}`}
          />
        );

      case 'review':
        return (
          <ReviewView
            questions={examState.result?.questions || []}
            userAnswers={examState.result?.userAnswers || {}}
            onBack={() => handleViewChange('history')}
          />
        );

      case 'history':
        return (
          <HistoryView
            results={results}
            onViewResult={handleViewResult}
            onDeleteResult={handleDeleteResult}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isAuthenticated && (
          <Navigation
            currentView={currentView}
            examInProgress={examState.examInProgress}
            examFinished={examState.examFinished}
            onViewChange={handleViewChange}
            user={user}
            onProfileClick={() => setCurrentView('profile')}
          />
        )}
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="/login" element={
              isAuthenticated ? <Navigate to="/" replace /> : <AuthLayout />
            } />
            <Route path="/sample-questions/:courseId" element={<SampleQuestionsPage />} />
            <Route path="/" element={
              isAuthenticated ? renderContent() : <CoursesHomePage />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 