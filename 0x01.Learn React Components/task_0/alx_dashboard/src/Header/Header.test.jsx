import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

jest.mock('./Header.module.css', () => ({
    app_header: 'mock-app-header',
    logo: 'mock-logo',
}));

describe('Header component', () => {
    it('renders the header with correct text', () => {
        render(<Header />);
        const headerText = screen.getByText('School dashboard');
        expect(headerText).toBeInTheDocument();
    });
});
