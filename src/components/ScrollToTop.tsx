import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  useEffect(() => {
    // Handle clicks on links to the current page
    const handleSamePageClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (link) {
        const href = link.getAttribute('href');
        // Check if the link points to the current pathname or full URL
        if (href === pathname || href === window.location.origin + pathname) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('click', handleSamePageClick, { capture: true });
    return () => window.removeEventListener('click', handleSamePageClick, { capture: true });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
