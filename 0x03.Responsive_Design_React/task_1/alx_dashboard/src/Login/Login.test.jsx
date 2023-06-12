import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

// Mock the aphrodite module
jest.mock('aphrodite', () => ({
    StyleSheet: {
        create: jest.fn(() => ({})),
    },
    css: jest.fn(() => ''),
}));

describe('Login', () => {
    it('renders the email and password input fields', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(screen.getByLabelText('Email Address:')).toBeInTheDocument();
        expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    });

    it('navigates to the dashboard on Sign In button click', () => {
        const { container } = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const signInButton = container.querySelector('button');
        fireEvent.click(signInButton);

        expect(window.location.pathname).toBe('/dashboard');
    });
});
