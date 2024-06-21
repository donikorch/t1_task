import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash(isLoading: boolean) {
  const location = useLocation();

  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        const item = document.querySelector(hash);
        if (item) {
          requestAnimationFrame(() => {
            item.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }
    }
  }, [location, isLoading]);
}
