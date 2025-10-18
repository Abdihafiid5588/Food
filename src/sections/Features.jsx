import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '/images/features/icon-fresh.svg',
    title: 'Fresh Ingredients',
    desc: 'We source the finest produce daily for unmatched flavor.'
  },
  {
    icon: '/images/features/icon-delivery.svg',
    title: 'Fast Delivery',
    desc: 'Hot and fresh at your door with real‑time tracking.'
  },
  {
    icon: '/images/features/icon-quality.svg',
    title: 'Top Quality',
    desc: 'Crafted by chefs with a passion for great food.'
  }
];

const Features = () => {
  return (
    <motion.section
      id="features"
      className="relative py-16 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lift transition"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 grid place-items-center mb-4">
                <img src={f.icon} alt="" className="h-6 w-6" loading="lazy" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-muted mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
