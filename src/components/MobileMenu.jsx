import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]'
    )
  ).filter((el) => el.getAttribute('tabindex') !== '-1');
}

const MobileMenu = ({ open, onClose }) => {
  const panelRef = useRef(null);
  const firstFocusRef = useRef(null);

  // Focus trap
  useEffect(() => {
    if (!open) return undefined;
    const panel = panelRef.current;
    const focusable = getFocusableElements(panel);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      } else if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstFocusRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
            onClick={onClose}
          />
          <motion.aside
            key="panel"
            ref={panelRef}
            className="fixed right-0 top-0 bottom-0 w-72 max-w-[80%] bg-white z-50 shadow-lift p-6 grid content-start gap-6"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <button
              ref={firstFocusRef}
              onClick={onClose}
              className="justify-self-end rounded-full border border-muted/30 px-3 py-1 text-sm text-muted hover:text-text"
            >
              Close
            </button>
            <nav className="grid gap-3" aria-label="Mobile">
              <a className="py-2" href="#home" onClick={onClose}>
                Home
              </a>
              <a className="py-2" href="#about" onClick={onClose}>
                About
              </a>
              <a className="py-2" href="#menu" onClick={onClose}>
                Menu
              </a>
              <a className="py-2" href="#features" onClick={onClose}>
                Features
              </a>
              <a className="py-2" href="#contact" onClick={onClose}>
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              onClick={onClose}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-white px-5 py-3 font-medium shadow-soft hover:shadow-lift transition"
            >
              Booking Now
            </a>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
