import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ filled, className = '' }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
  </svg>
);

Star.propTypes = {
  filled: PropTypes.bool,
  className: PropTypes.string,
};

const Rating = ({ value = 0, outOf = 5, className = '' }) => {
  return (
    <div className={`inline-flex items-center text-primary ${className}`} aria-label={`${value} out of ${outOf} stars`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <Star key={i} filled={i < value} className="mr-0.5" />
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  outOf: PropTypes.number,
  className: PropTypes.string,
};

export default Rating;
