import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

jest.mock('aphrodite', () => ({
    StyleSheet: {
        create: jest.fn(() => ({})),
    },
    css: jest.fn(() => ''),
}));

describe('Notifications', () => {
    it('renders the component without notifications', () => {
        render(<Notifications displayDrawer={false} />);
        const noNotificationsText = screen.getByText('No new notifications!');
        expect(noNotificationsText).toBeInTheDocument();
    });

    it('renders the component with notifications and calls markAsRead', () => {
        render(<Notifications displayDrawer={true} />);
        const notificationItems = screen.getAllByRole('listitem');

        expect(notificationItems).toHaveLength(3);
        expect(notificationItems[0]).toHaveTextContent('New course available');
        expect(notificationItems[0]).toHaveAttribute('data-notification-type', 'urgent');
        expect(notificationItems[1]).toHaveTextContent('New resume available');
        expect(notificationItems[1]).toHaveAttribute('data-notification-type', 'default');
        expect(notificationItems[2]).toHaveTextContent('[object Object]');

        fireEvent.click(notificationItems[0]);
        fireEvent.click(notificationItems[1]);
        fireEvent.click(notificationItems[2]);

        //const readNotifications = screen.getAllByTestId('notification-read');
        //expect(readNotifications).toHaveLength(3);
    });

    // Add more test cases as needed...
});
