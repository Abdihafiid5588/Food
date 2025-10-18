import React from 'react';
import { motion } from 'framer-motion';
import MenuCard from '../components/MenuCard.jsx';

const items = [
  {
    id: 1,
    image: '/images/menu/menu-1.svg',
    title: 'Classic Burger',
    price: 9.99,
    description: 'Juicy beef patty with lettuce, tomato, and our secret sauce.',
    rating: 5,
  },
  {
    id: 2,
    image: '/images/menu/menu-2.svg',
    title: 'Spicy Chicken',
    price: 11.49,
    description: 'Crispy chicken with chili mayo and pickles.',
    rating: 4,
  },
  {
    id: 3,
    image: '/images/menu/menu-3.svg',
    title: 'Veggie Delight',
    price: 8.5,
    description: 'Grilled veggies, hummus, and feta cheese in a warm bun.',
    rating: 4,
  },
  {
    id: 4,
    image: '/images/menu/menu-1.svg',
    title: 'BBQ Bacon',
    price: 12.25,
    description: 'Smoky barbecue sauce with crispy bacon and cheddar.',
    rating: 5,
  },
  {
    id: 5,
    image: '/images/menu/menu-2.svg',
    title: 'Cheesy Fries',
    price: 5.99,
    description: 'Crispy fries topped with rich melted cheese.',
    rating: 4,
  },
  {
    id: 6,
    image: '/images/menu/menu-3.svg',
    title: 'Garden Salad',
    price: 7.25,
    description: 'Fresh greens, cherry tomatoes, cucumber, and vinaigrette.',
    rating: 4,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const MenuGrid = () => {
  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl leading-tight">Our Menu</h2>
            <p className="text-muted">Handpicked dishes our customers love</p>
          </div>
          <a href="#" className="hidden sm:inline text-primary font-medium hover:underline">
            See all →
          </a>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <motion.div key={item.id} variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}>
              <MenuCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuGrid;
