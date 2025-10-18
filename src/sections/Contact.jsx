import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl leading-tight">Stay in the loop</h2>
        <p className="text-muted mt-2">Subscribe to special offers and updates.</p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-start justify-center" noValidate>
          <div className="text-left">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-text/10 bg-white px-5 py-3 shadow-soft"
              required
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby="email-help"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 font-medium shadow-soft"
          >
            Subscribe
          </motion.button>
        </form>
        <div id="email-help" className="mt-2 text-sm h-5" aria-live="polite">
          {error && <span className="text-red-600">{error}</span>}
          {submitted && !error && <span className="text-green-700">Thanks! You're subscribed.</span>}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
