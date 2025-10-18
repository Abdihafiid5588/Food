import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Rating from '../components/Rating.jsx';

const testimonials = [
  {
    id: 1,
    quote: 'Absolutely delicious! The best burger I have had in years.',
    author: 'Alex Johnson',
    role: 'Food Blogger',
    avatar: '/images/avatars/avatar-1.svg',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Quick delivery and the food was still hot. Highly recommend!',
    author: 'Priya Singh',
    role: 'Designer',
    avatar: '/images/avatars/avatar-2.svg',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Great flavors and generous portions. Will order again!',
    author: 'Marco Rossi',
    role: 'Developer',
    avatar: '/images/avatars/avatar-3.svg',
    rating: 4,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function start() {
      timerRef.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    }
    if (!prefersReduced) start();
    return () => clearInterval(timerRef.current);
  }, []);

  const onPrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const onNext = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl leading-tight">What people say</h2>

        <div className="relative mt-8" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={() => {
          timerRef.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
        }}>
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <div className="flex items-center justify-center">
                <img
                  src={t.avatar}
                  alt={`${t.author} avatar`}
                  className="h-14 w-14 rounded-full mr-3"
                  loading="lazy"
                />
                <div>
                  <figcaption className="font-semibold">{t.author}</figcaption>
                  <div className="text-sm text-muted -mt-0.5">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-lg">“{t.quote}”</blockquote>
              <div className="mt-3">
                <Rating value={t.rating} />
              </div>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
            {testimonials.map((_, i) => (
              <span key={i} className={`h-1.5 w-5 rounded-full ${i === index ? 'bg-primary' : 'bg-muted/30'}`} />
            ))}
          </div>
          <div className="sr-only" aria-live="polite">Testimonial {index + 1} of {testimonials.length}</div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <button aria-label="Previous" onClick={onPrev} className="rounded-full border border-muted/40 px-3 py-1 text-sm">Prev</button>
            <button aria-label="Next" onClick={onNext} className="rounded-full border border-muted/40 px-3 py-1 text-sm">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
