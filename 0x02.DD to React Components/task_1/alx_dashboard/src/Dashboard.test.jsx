import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('./Dashboard.module.css', () => ({
    container: 'mocked-container',
    column1: 'mocked-column1',
    column2: 'mocked-column2',
    header: 'mocked-header',
    logo: 'mocked-logo',
    menuItem: 'mocked-menuItem',
}));

describe('Dashboard', () => {
    test('renders without crashing', () => {
        render(<Dashboard />);
    });

    test('renders header section with logo and title', () => {
        render(<Dashboard />);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1, name: /school dashboard/i })).toBeInTheDocument();
    });

    test('renders notifications section', () => {
        render(<Dashboard />);
        expect(screen.getByText('Your notifications')).toBeInTheDocument();
        expect(screen.getByTestId('notifications-section')).toBeInTheDocument();
    });

    test('renders course list section when logged in', () => {
        render(<Dashboard isLoggedIn={true} />);
        expect(screen.getByTestId('course-list-section')).toBeInTheDocument();
    });

    test('renders login section when not logged in', () => {
        render(<Dashboard isLoggedIn={false} />);
        expect(screen.getByTestId('login-section')).toBeInTheDocument();
    });

    test('renders footer section', () => {
        render(<Dashboard />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    test('calls logOut function and shows alert when Ctrl+h is pressed', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        render(<Dashboard logOut={logOutMock} />);
        const body = screen.getByTestId('dashboard-body');
        body.dispatchEvent(
            new KeyboardEvent('keydown', {
                ctrlKey: true,
                key: 'h',
            })
        );
        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();
        alertMock.mockRestore();
    });
});
