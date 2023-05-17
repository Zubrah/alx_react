import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    const mockNotifications = [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
        { id: 3, type: 'default', value: 'Notification 3' },
    ];
    const mockMarkNotificationAsRead = jest.fn();
    const mockHandleNotifications = jest.fn();

    it('renders the notifications when displayDrawer is true', () => {
        render(
            <Notifications
                displayDrawer
                notifications={mockNotifications}
                markNotificationAsRead={mockMarkNotificationAsRead}
                handleNotifications={mockHandleNotifications}
            />
        );

        const notificationItems = screen.getAllByRole('listitem');
        expect(notificationItems).toHaveLength(mockNotifications.length);
    });

    it('renders "No new notifications!" message when displayDrawer is true and there are no notifications', () => {
        render(
            <Notifications
                displayDrawer
                notifications={[]}
                markNotificationAsRead={mockMarkNotificationAsRead}
                handleNotifications={mockHandleNotifications}
            />
        );

        const noNotificationsMessage = screen.getByText('No new notifications!');
        expect(noNotificationsMessage).toBeInTheDocument();
    });

    it('renders "No new notifications!" message when displayDrawer is false', () => {
        render(
            <Notifications
                displayDrawer={false}
                notifications={mockNotifications}
                markNotificationAsRead={mockMarkNotificationAsRead}
                handleNotifications={mockHandleNotifications}
            />
        );

        const noNotificationsMessage = screen.getByText('No new notifications!');
        expect(noNotificationsMessage).toBeInTheDocument();
    });

    it('calls the markNotificationAsRead function with the correct id when a notification item is clicked', async () => {
        render(
            <Notifications
                displayDrawer
                notifications={mockNotifications}
                markNotificationAsRead={mockMarkNotificationAsRead}
                handleNotifications={mockHandleNotifications}
            />
        );

        const notificationItem = screen.getByText('Notification 1');
        fireEvent.click(notificationItem);

        await waitFor(() => {
            expect(mockMarkNotificationAsRead).toHaveBeenCalledWith(1);
        });
    });

    it('calls the handleNotifications function when the close button is clicked', async () => {
        render(
            <Notifications
                displayDrawer
                notifications={mockNotifications}
                markNotificationAsRead={mockMarkNotificationAsRead}
                handleNotifications={mockHandleNotifications}
            />
        );

        const closeButton = screen.getByLabelText('Close');
        fireEvent.click(closeButton);

        await waitFor(() => {
            expect(mockHandleNotifications).toHaveBeenCalled();
        });
    });
});
