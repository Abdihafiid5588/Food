import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuCard from '../src/components/MenuCard.jsx';

describe('MenuCard', () => {
  it('renders title and price', () => {
    render(
      <MenuCard
        image="/images/menu/menu-1.svg"
        title="Test Dish"
        price={12.34}
        description="Yummy"
        rating={4}
      />
    );

    expect(screen.getByTestId('menu-title')).toHaveTextContent('Test Dish');
    expect(screen.getByText('$12.34')).toBeInTheDocument();
  });
});
