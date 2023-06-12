import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

jest.mock('aphrodite', () => ({
    StyleSheet: {
        create: jest.fn().mockReturnValue({
            app_header: 'mocked-app-header',
            h1: 'mocked-h1',
            logo: 'mocked-logo',
        }),
    },
    css: jest.fn().mockImplementation((styles) => {
        if (typeof styles === 'object') {
            return Object.keys(styles)
                .map((key) => styles[key])
                .join(' ');
        }
        return styles;
    }),
}));

describe('<Header />', () => {
    it('renders the header with the correct title', () => {
        render(<Header />);
        const titleElement = screen.getByText('School dashboard');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders the header with the logo', () => {
        render(<Header />);
        const logoElement = screen.getByAltText('logo');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveClass('mocked-logo');
    });

    it('applies the correct CSS styles to the header elements', () => {
        render(<Header />);
        //const headerElement = screen.getByTestId('header');
        //expect(headerElement).toHaveClass('mocked-app-header');

        const titleElement = screen.getByText('School dashboard');
        expect(titleElement).toHaveClass('mocked-h1');

        const logoElement = screen.getByAltText('logo');
        expect(logoElement).toHaveClass('mocked-logo');
    });
});
