import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

// Mock CSS module
jest.mock('../Dashboard.module.css', () => ({
    Notifications: 'mocked-notifications',
}));

// Mock assets
jest.mock('../assets/close-icon.jpeg', () => 'mocked-close-icon');

// Mock NotificationItem component
jest.mock('./NotificationItem', () => ({ type, value, markAsRead, id }) => (
    <li data-testid={`notification-${id}`} onClick={() => markAsRead(id)}>
        {type}: {value}
    </li>
));

// Mock getLatestNotification utility function
jest.mock('../utils', () => ({
    getLatestNotification: jest.fn(() => 'Mocked latest notification'),
}));

describe('Notifications', () => {
    test('renders the component with no notifications', () => {
        render(<Notifications displayDrawer={false} />);

        // Assert the text content
        expect(screen.getByText('No new notifications!')).toBeInTheDocument();
        expect(screen.queryByTestId('notification-1')).not.toBeInTheDocument();
        expect(screen.queryByTestId('notification-2')).not.toBeInTheDocument();
        expect(screen.queryByTestId('notification-3')).not.toBeInTheDocument();
    });

    test('renders the component with notifications and marks them as read', () => {
        render(<Notifications displayDrawer={true} />);

        // Assert the presence of NotificationItem components
        expect(screen.getByTestId('notification-1')).toBeInTheDocument();
        expect(screen.getByTestId('notification-2')).toBeInTheDocument();
        expect(screen.getByTestId('notification-3')).toBeInTheDocument();

        // Assert the text content of NotificationItem components
        expect(screen.getByTestId('notification-1')).toHaveTextContent('urgent: New course available');
        expect(screen.getByTestId('notification-2')).toHaveTextContent('default: New resume available');
        expect(screen.getByTestId('notification-3')).toHaveTextContent(':');

        // Simulate click event on the first notification
        fireEvent.click(screen.getByTestId('notification-1'));

        // Assert the console log message
        //expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
    });

    // Add more test cases as needed
});
