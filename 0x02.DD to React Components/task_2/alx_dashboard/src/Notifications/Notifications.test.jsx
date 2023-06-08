import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

jest.mock('../utils', () => ({
    getLatestNotification: jest.fn().mockReturnValue('Latest Notification'),
}));

describe('Notifications', () => {
    test('renders notifications when displayDrawer is true', () => {
        render(<Notifications displayDrawer={true} />);

        const notificationItems = screen.getAllByRole('listitem');
        expect(notificationItems).toHaveLength(3);

        expect(screen.getByText('New course available')).toBeInTheDocument();
        expect(screen.getByText('New resume available')).toBeInTheDocument();
        expect(screen.getByText('Latest Notification')).toBeInTheDocument();
    });

    test('renders "No new notifications!" when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} />);

        const noNotificationsMessage = screen.getByText('No new notifications!');
        expect(noNotificationsMessage).toBeInTheDocument();
    });

    test('calls markAsRead function when a notification item is clicked', () => {
        const mockMarkAsRead = jest.fn();

        render(
            <Notifications displayDrawer={true} markAsRead={mockMarkAsRead} />
        );

        const notificationItem = screen.getByText('New course available');
        fireEvent.click(notificationItem);

        expect(mockMarkAsRead).toHaveBeenCalledWith(1);
    });

    test('calls console.log when close button is clicked', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        render(<Notifications displayDrawer={true} />);

        const closeButton = screen.getByLabelText('Close');
        fireEvent.click(closeButton);

        expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

        consoleSpy.mockRestore();
    });
});
