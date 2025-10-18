import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative py-16 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -bottom-8 -left-8 soft-shape" aria-hidden="true" />
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                loading="lazy"
                src="/images/menu/menu-2.svg"
                alt="Chef plating a dish"
                className="w-full h-80 object-cover"
                srcSet="/images/menu/menu-2.svg 1x"
              />
            </div>
          </div>
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl leading-tight">About our kitchen</h2>
            <p className="text-muted mt-3 max-w-prose">
              Our chefs blend tradition with creativity to craft memorable dishes. Every plate tells a story of
              passion, precision, and the freshest seasonal ingredients.
            </p>
            <a href="#menu" className="inline-block mt-6 text-primary font-medium hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
