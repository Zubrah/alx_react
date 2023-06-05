// Test file (Login.test.jsx)
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Login from './Login';

// Mock the CSS module
jest.mock('./Login.module.css', () => ({
    app_body: 'mocked-app-body',
    inputContainer: 'mocked-input-container',
    inputRow: 'mocked-input-row',
    button: 'mocked-button',
}));

describe('Login', () => {
    it('renders the login form', () => {
        const { getByLabelText, getByText } = render(
            <Router> {/* Add Router component wrapper */}
                <Login />
            </Router>
        );
        const emailInput = getByLabelText('Email Address:');
        const passwordInput = getByLabelText('Password:');
        const signInButton = getByText('Sign In');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(signInButton).toBeInTheDocument();
    });

    it('triggers signIn function on button click', () => {
        const navigateMock = jest.fn();
        const { getByText } = render(
            <Router> {/* Add Router component wrapper */}
                <Login />
            </Router>
        );
        const signInButton = getByText('Sign In');

        fireEvent.click(signInButton); // Simulate button click

        // Add your assertions for the signIn function being triggered
    });
});
