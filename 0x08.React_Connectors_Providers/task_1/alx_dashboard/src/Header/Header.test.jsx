import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the header with the logo and title', () => {
    render(<Header />);

    const logoElement = screen.getByAltText('logo');
    const titleElement = screen.getByText('School dashboard');

    expect(logoElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
