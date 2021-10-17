import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../index'

describe('Header', () => {
  it('should has data-open attribute when showMobileNav is true', () => {
    render(<Header showMobileNav />);

    const btnMobileNav = screen.getByTestId('btnMobileNav');
    expect(btnMobileNav).toHaveAttribute('data-open');
  });

  it('should display correct user text', () => {
    const handleClickMobileButtonFn = jest.fn();
    render(<Header showMobileNav onClickMobileButtonFn={handleClickMobileButtonFn} />);
    expect(screen.getByText('Shipper User')).toBeInTheDocument();
  });
})