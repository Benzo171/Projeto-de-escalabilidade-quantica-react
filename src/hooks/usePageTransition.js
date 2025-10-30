import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const transitionTo = useCallback((path, delay = 500) => {
    setIsTransitioning(true);
    
    // Adiciona classe de animação ao body
    document.body.classList.add('page-exit-animation');
    
    setTimeout(() => {
      navigate(path);
      setIsTransitioning(false);
      document.body.classList.remove('page-exit-animation');
    }, delay);
  }, [navigate]);

  return { isTransitioning, transitionTo };
};
