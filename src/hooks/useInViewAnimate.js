import { useEffect, useRef } from 'react';

export function useInViewAnimate(callback, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;

    const target = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback?.(entry);
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [callback, options]);

  return ref;
}

export default useInViewAnimate;
