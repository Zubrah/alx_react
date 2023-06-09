import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('./Dashboard.module.css', () => ({}));

describe('Dashboard', () => {
    test('renders Dashboard component with all sections when logged in', () => {
        render(<Dashboard />);
        // Perform assertions on the rendered output using the screen object
        expect(screen.getByText('School dashboard')).toBeInTheDocument();
        expect(screen.getByText('Your notifications')).toBeInTheDocument();
        // Add more assertions for other elements in the Dashboard component
    });

    test('renders Dashboard component with login section when logged out', () => {
        render(<Dashboard isLoggedIn={false} />);
        // Perform assertions on the rendered output using the screen object
        expect(screen.getByText('Log in Access Full Dashboard')).toBeInTheDocument();
        expect(screen.queryByText('Course list')).not.toBeInTheDocument();
        // Add more assertions for other elements in the Dashboard component
    });
});
