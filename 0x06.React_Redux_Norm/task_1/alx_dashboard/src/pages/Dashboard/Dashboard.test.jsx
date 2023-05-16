import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    });

    it('renders a header with a logo and title', () => {
        render(<Dashboard />);
        const logo = screen.getByAltText('logo');
        const title = screen.getByText('School dashboard');
        expect(logo).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    it('shows notifications when "Your notifications" is clicked', () => {
        render(<Dashboard />);
        fireEvent.click(screen.getByText('Your notifications'));
        const notification = screen.getByText('New course available');
        expect(notification).toBeInTheDocument();
    });

    it('marks a notification as read when clicked', async () => {
        render(<Dashboard />);
        fireEvent.click(screen.getByText('Your notifications'));
        const notification = screen.getByText('New course available');
        fireEvent.click(notification);
        await waitFor(() => {
            expect(notification).not.toBeInTheDocument();
        });
    });

    it('logs in and displays the course list', async () => {
        render(<Dashboard />);
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByRole('button', { name: 'Log in' });

        fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            const courseListTitle = screen.getByText('Course list');
            expect(courseListTitle).toBeInTheDocument();
        });
    });

    it('logs out and shows the login form again', async () => {
        render(<Dashboard />);
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByRole('button', { name: 'Log in' });

        fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            const logoutLink = screen.getByText('(logout)');
            fireEvent.click(logoutLink);
        });

        await waitFor(() => {
            const loginFormTitle = screen.getByText('Log in Access Full Dashboard');
            expect(loginFormTitle).toBeInTheDocument();
        });
    });
});
