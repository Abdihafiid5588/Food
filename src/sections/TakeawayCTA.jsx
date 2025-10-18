import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const TakeawayCTA = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;
    const el = phoneRef.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        rotate: 6,
        transformOrigin: '80% 80%',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl leading-tight">Order on the go</h2>
            <p className="text-muted mt-3 max-w-prose">
              Get our mobile app and enjoy a seamless ordering experience. Track your delivery in real time and
              save your favorite dishes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-black text-white pl-3 pr-4 py-2 shadow-soft"
                aria-label="Download on the App Store"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.3 12.6c.1-2.2 1.8-3.3 1.9-3.4-1-.1-2 .6-2.5.6-.5 0-1.3-.6-2.1-.6-1.1 0-2.2.7-2.7 1.7-1.2 2.1-.3 5.2.8 6.9.6.9 1.3 1.9 2.3 1.9.9 0 1.2-.6 2.3-.6 1 0 1.4.6 2.3.6 1-.1 1.6-.9 2.2-1.8.7-1.1 1-2.1 1-2.1-.1 0-2-.8-2-3.2zM15.7 6.8c.5-.6.8-1.4.7-2.3-.7.1-1.5.5-2 1.1-.5.6-.8 1.3-.7 2.1.8.1 1.6-.3 2-.9z"/>
                </svg>
                <span className="text-left">
                  <span className="block text-[10px] leading-none opacity-80">Download on the</span>
                  <span className="block text-sm font-semibold leading-tight -mt-0.5">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-black border border-black pl-3 pr-4 py-2 shadow-soft"
                aria-label="Get it on Google Play"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 2.6c-.3.2-.6.6-.6 1.1v16.6c0 .5.3.9.6 1.1l9.3-9.3L3.6 2.6zm10.7 6.4l-1.7 1.7 3.3 3.3 3.4-1.9c.6-.3.6-1.2 0-1.5l-5-2.6zM12.6 12.1l-1.8 1.8 5.4 5.4c.4-.1.7-.5.7-.9v-3.3l-4.3-3z"/>
                </svg>
                <span className="text-left">
                  <span className="block text-[10px] leading-none opacity-80">GET IT ON</span>
                  <span className="block text-sm font-semibold leading-tight -mt-0.5">Google Play</span>
                </span>
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              ref={phoneRef}
              src="/images/phone/phone-mock.svg"
              alt="Phone app mockup"
              className="w-72 md:w-80 lg:w-96 mx-auto drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeawayCTA;
