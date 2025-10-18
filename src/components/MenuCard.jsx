import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Rating from './Rating.jsx';

const MenuCard = ({ image, title, price, description, rating }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-2xl shadow-soft hover:shadow-lift transition overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          loading="lazy"
          src={image}
          alt={`${title} image`}
          className="h-48 w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-semibold text-text shadow-soft">
          ${price}
        </div>
      </div>
      <div className="p-5 space-y-2">
        <h3 className="font-semibold text-lg" data-testid="menu-title">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <Rating value={rating} />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Add ${title} to cart`}
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-4 py-2 text-sm font-medium shadow-soft"
          >
            + Add
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

MenuCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string,
  rating: PropTypes.number,
};

export default MenuCard;
