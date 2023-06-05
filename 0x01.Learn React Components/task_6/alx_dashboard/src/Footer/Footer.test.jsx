import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getFooterCopy, getFullYear } from '../utils';

jest.mock('../utils', () => ({
    getFooterCopy: jest.fn(),
    getFullYear: jest.fn(),
}));

jest.mock('./Footer.module.css', () => ({
    app_footer: 'mock-app-footer',
    button_18: 'mock-button-18',
}));

describe('Footer component', () => {
    beforeEach(() => {
        getFooterCopy.mockReturnValue('Sample footer copy');
        getFullYear.mockReturnValue(2023);
    });

    it('renders the footer with correct text', () => {
        render(<Footer />);
        const footerCopy = screen.getByText('Sample footer copy');
        const currentYear = screen.getByText('© 2023');
        expect(footerCopy).toBeInTheDocument();
        expect(currentYear).toBeInTheDocument();
    });
});
