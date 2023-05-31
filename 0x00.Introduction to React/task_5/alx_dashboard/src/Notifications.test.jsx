import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from './utils';

jest.mock('./App.module.css', () => ({
    Notifications: 'mock-notifications',
}));

jest.mock('./assets/close-icon.jpeg', () => 'mock-close-icon-image');

jest.mock('./utils', () => ({
    getLatestNotification: jest.fn(() => 'Mock latest notification'),
}));

describe('Notifications component', () => {
    it('renders the component without crashing', () => {
        render(<Notifications />);
        const notificationText = screen.getByText('Here is the list of notifications');
        expect(notificationText).toBeInTheDocument();
    });

    it('renders a close button', () => {
        render(<Notifications />);
        const closeButton = screen.getByAltText('Close');
        expect(closeButton).toBeInTheDocument();
    });


    it('renders the list of notifications', () => {
        render(<Notifications />);
        const notificationList = screen.getByRole('list');
        expect(notificationList).toBeInTheDocument();
        expect(notificationList.children.length).toBe(3);
    });

    it('renders the latest notification with the correct HTML', () => {
        render(<Notifications />);
        const latestNotification = screen.getByText('Mock latest notification');
        expect(latestNotification).toBeInTheDocument();
    });


});
