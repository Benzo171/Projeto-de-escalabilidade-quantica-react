import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [hasIntersected, options]);

  return { targetRef, isIntersecting, hasIntersected };
};

export const useStickyTitle = (footerRef) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const footer = footerRef?.current;
    
    if (!title || !footer) return;

    // Observer para entrada do título
    const entryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entryObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // Observer para saída quando footer aparece
    const exitObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    entryObserver.observe(title);
    exitObserver.observe(footer);

    return () => {
      entryObserver.unobserve(title);
      exitObserver.unobserve(footer);
    };
  }, [footerRef]);

  return { titleRef, isVisible };
};
