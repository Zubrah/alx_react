import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

// Mock CSS module
jest.mock('./Dashboard.module.css', () => ({
    'App-body': 'mocked-app-body',
    'App-body-content': 'mocked-app-body-content',
    'App-body-content-school-info': 'mocked-app-body-content-school-info',
    'App-body-content-courses': 'mocked-app-body-content-courses',
}));

describe('Dashboard', () => {
    test('renders without crashing', () => {
        render(<Dashboard />);
    });

    test('renders a header and a footer', () => {
        render(<Dashboard />);
        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    test('renders three sections', () => {
        render(<Dashboard />);
        expect(screen.getByTestId('school-info-section')).toBeInTheDocument();
        expect(screen.getByTestId('courses-section')).toBeInTheDocument();
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
