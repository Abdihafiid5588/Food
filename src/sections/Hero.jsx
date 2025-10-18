import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const headline = 'Making time a good time by making food the good food.';

function splitWords(text) {
  return text.split(/(\s+)/).map((word, i) => (
    <span
      key={i}
      className={word.trim() ? 'inline-block will-change-transform' : ''}
      data-animate-word={word.trim() ? '1' : undefined}
      aria-hidden={word.trim() ? undefined : true}
    >
      {word}
    </span>
  ));
}

const Hero = () => {
  const root = useRef(null);
  const imgRef = useRef(null);
  const shapeRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Headline words stagger
      const words = gsap.utils.toArray('[data-animate-word]');
      if (words.length) {
        gsap.set(words, { y: 20, opacity: 0 });
        tl.to(words, { y: 0, opacity: 1, stagger: 0.04, duration: 0.6 });
      }

      // Subheadline and buttons
      tl.from(
        ['#hero-sub', '#hero-cta'],
        { y: 24, opacity: 0, stagger: 0.15, duration: 0.6 },
        '>-0.2'
      );

      // Hero images pop-in
      const pieces = gsap.utils.toArray(['#pan', '#burger', '#chili', '#shadow']);
      tl.from(
        pieces,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
          rotate: (i) => (i % 2 === 0 ? -5 : 5),
          transformOrigin: '50% 50%',
          stagger: 0.12,
          duration: 0.6,
        },
        '>-0.2'
      );

      if (!prefersReduced) {
        // Floating loop
        gsap.to('#pan', { y: 8, rotation: -2, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('#burger', { y: -8, rotation: 2, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('#chili', { y: 6, rotation: -2, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('#shadow', { scale: 1.05, opacity: 0.9, duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut' });

        // Parallax decorative shape
        if (shapeRef.current) {
          gsap.to(shapeRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative overflow-clip">
      <div className="absolute -bottom-24 -right-24 soft-shape" ref={shapeRef} aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="relative z-10">
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl leading-tight tracking-tight max-w-2xl">
              {splitWords(headline)}
            </h1>
            <p id="hero-sub" className="mt-4 text-base sm:text-lg text-muted max-w-xl">
              Fresh ingredients, masterful cooking, and fast delivery. Taste the difference today.
            </p>
            <div id="hero-cta" className="mt-8 flex items-center gap-3">
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 font-medium shadow-soft hover:shadow-lift"
              >
                Order Now
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border border-text/10 text-text px-6 py-3 font-medium bg-white/60 backdrop-blur hover:bg-white"
              >
                Learn More
              </motion.a>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[480px]" aria-hidden="true" ref={imgRef}>
            <img
              id="shadow"
              src="/images/hero/shadow.svg"
              alt="Shadow under pan"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[72%] opacity-80"
              loading="lazy"
            />
            <img
              id="pan"
              src="/images/hero/pan.svg"
              alt="Frying pan"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[78%]"
              loading="lazy"
            />
            <img
              id="burger"
              src="/images/hero/burger.svg"
              alt="Burger on the pan"
              className="absolute bottom-36 left-1/2 -translate-x-1/2 w-36"
              loading="lazy"
            />
            <img
              id="chili"
              src="/images/hero/chili.svg"
              alt="Floating chili"
              className="absolute top-8 right-8 w-16"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
