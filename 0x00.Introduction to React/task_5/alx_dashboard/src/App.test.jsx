import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getFooterCopy, getFullYear } from './utils';

jest.mock('./App.module.css', () => ({
    container: 'mock-container',
    column1: 'mock-column1',
    column2: 'mock-column2',
    app_header: 'mock-app-header',
    logo: 'mock-logo',
    app_body: 'mock-app-body',
    body_btn: 'mock-body-btn',
    btn_wrap: 'mock-btn-wrap',
    button: 'mock-button',
    app_footer: 'mock-app-footer',
    button_18: 'mock-button-18',
}));

jest.mock('./assets/ALX+PNG.png', () => 'mock-logo-image');

jest.mock('./Notifications', () => () => <div data-testid="mock-notifications" />);

describe('App component', () => {
    it('renders the component without crashing', () => {
        render(<App />);
        const schoolName = screen.getByText('School dashboard');
        expect(schoolName).toBeInTheDocument();
    });

    it('displays the school logo', () => {
        render(<App />);
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });

    it('displays the school name in the header', () => {
        render(<App />);
        const schoolName = screen.getByText('School dashboard');
        expect(schoolName).toBeInTheDocument();
    });

    it('displays the login form', () => {
        render(<App />);
        const emailInput = screen.getByLabelText('Email Address:');
        const passwordInput = screen.getByLabelText('Password:');
        const signInButton = screen.getByText('Sign In');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(signInButton).toBeInTheDocument();
    });

    it('displays the notifications component', () => {
        render(<App />);
        const notificationsComponent = screen.getByTestId('mock-notifications');
        expect(notificationsComponent).toBeInTheDocument();
    });

    it('displays the footer with the correct text', () => {
        render(<App />);
        const footerCopy = screen.getByText(getFooterCopy(true));
        const currentYear = screen.getByText(getFullYear());

        expect(footerCopy).toBeInTheDocument();
        expect(currentYear).toBeInTheDocument();
    });
});
