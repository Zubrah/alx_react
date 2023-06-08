import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('./Notifications/Notifications', () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(<div>Mocked Notifications</div>),
}));
jest.mock('./Dashboard.module.css', () => ({
    container: 'mocked-container',
    column1: 'mocked-column1',
    column2: 'mocked-column2',
    header: 'mocked-header',
    logo: 'mocked-logo',
    menuItem: 'mocked-menuItem',
}));

describe('Dashboard', () => {
    test('renders Dashboard with login and notifications', () => {
        render(<Dashboard isLoggedIn={true} displayDrawer={true} />);

        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();

        const notifications = screen.getByText('Mocked Notifications');
        expect(notifications).toBeInTheDocument();

        const courseList = screen.getByRole('list');
        expect(courseList).toBeInTheDocument();

        const loginComponent = screen.queryByRole('textbox');
        expect(loginComponent).not.toBeInTheDocument();

        const footer = screen.getByText('Footer');
        expect(footer).toBeInTheDocument();
    });

    test('renders Dashboard with login and without notifications', () => {
        render(<Dashboard isLoggedIn={true} displayDrawer={false} />);

        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();

        const notifications = screen.queryByText('Mocked Notifications');
        expect(notifications).not.toBeInTheDocument();

        const courseList = screen.getByRole('list');
        expect(courseList).toBeInTheDocument();

        const loginComponent = screen.queryByRole('textbox');
        expect(loginComponent).not.toBeInTheDocument();

        const footer = screen.getByText('Footer');
        expect(footer).toBeInTheDocument();
    });

    test('renders Dashboard without login', () => {
        render(<Dashboard isLoggedIn={false} displayDrawer={true} />);

        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();

        const notifications = screen.getByText('Mocked Notifications');
        expect(notifications).toBeInTheDocument();

        const courseList = screen.queryByRole('list');
        expect(courseList).not.toBeInTheDocument();

        const loginComponent = screen.getByRole('textbox');
        expect(loginComponent).toBeInTheDocument();

        const footer = screen.getByText('Footer');
        expect(footer).toBeInTheDocument();
    });

    test('calls logOut function when Ctrl+h is pressed', () => {
        const logOutMock = jest.fn();
        render(<Dashboard isLoggedIn={true} displayDrawer={true} logOut={logOutMock} />);

        fireEvent.keyDown(document, { key: 'h', ctrlKey: true });
        expect(logOutMock).toHaveBeenCalled();
    });
});
