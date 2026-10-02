import React, { useState, useEffect } from 'react';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
  };

  if (currentPath !== '/' && currentPath !== '' && currentPath !== '/index.html') {
    return <NotFoundPage onBackToHome={navigateToHome} />;
  }

  return <HomePage />;
};

export default App;
