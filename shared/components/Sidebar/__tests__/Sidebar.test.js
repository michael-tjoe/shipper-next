import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Sidebar from '../index'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Header', () => {
  it('should has data-open attribute when display is set to true', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { product: 'coffee' },
    }))
    render(<Sidebar display />);

    const sidebarWrapper = screen.getByTestId('shipperSidebar');
    expect(sidebarWrapper).toHaveAttribute('data-open');
  });

  it('should remove data-open attribute when display is set to false', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { product: 'coffee' },
    }))
    render(<Sidebar display={false} />);

    const sidebarWrapper = screen.getByTestId('shipperSidebar');
    expect(sidebarWrapper).not.toHaveAttribute('data-open');
  });

  it('should display correct menu', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { product: 'coffee' },
    }))

    render(<Sidebar />);

    expect(screen.getByText('Beranda')).toBeInTheDocument();
    expect(screen.getByText('Driver Management')).toBeInTheDocument();
    expect(screen.getByText('Pickup')).toBeInTheDocument();
  });
})