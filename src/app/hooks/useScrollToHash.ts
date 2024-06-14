import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash(isLoading: boolean) {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoading) {
        const hash = window.location.hash;
        if (hash) {
          const item = document.querySelector(hash);
          if (item) {
            item.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [location, isLoading]);
}
