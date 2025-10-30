import { useRef } from 'react';
import { useStickyTitle } from '../../hooks/useIntersectionObserver';

const StickyTitle = ({ children, className = "" }) => {
  const footerRef = useRef(null);
  const { titleRef, isVisible } = useStickyTitle(footerRef);

  return (
    <>
      <div 
        ref={titleRef}
        className={`sticky top-20 z-40 transition-all duration-500 ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        } ${className}`}
      >
        {children}
      </div>
      
      {/* Referência para o footer - será usado pelo hook */}
      <div ref={footerRef} className="sr-only" />
    </>
  );
};

export default StickyTitle;
