import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./App.module.css', () => ({
    container: 'mock-container',
    column1: 'mock-column1',
    column2: 'mock-column2',
}));

jest.mock('./Header/header', () => () => <div data-testid="mock-header" />);
jest.mock('./Login/Login', () => () => <div data-testid="mock-login" />);
jest.mock('./Notifications', () => () => <div data-testid="mock-notifications" />);
jest.mock('./Footer/Footer', () => () => <div data-testid="mock-footer" />);

describe('App component', () => {
    it('renders the header', () => {
        render(<App />);
        const header = screen.getByTestId('mock-header');
        expect(header).toBeInTheDocument();
    });

    it('renders the login form', () => {
        render(<App />);
        const loginForm = screen.getByTestId('mock-login');
        expect(loginForm).toBeInTheDocument();
    });

    it('renders the notifications', () => {
        render(<App />);
        const notifications = screen.getByTestId('mock-notifications');
        expect(notifications).toBeInTheDocument();
    });

    it('renders the footer', () => {
        render(<App />);
        const footer = screen.getByTestId('mock-footer');
        expect(footer).toBeInTheDocument();
    });
});
