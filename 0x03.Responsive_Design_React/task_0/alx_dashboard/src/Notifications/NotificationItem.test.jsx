import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

const mockMarkAsRead = jest.fn();

const mockNotification = {
    id: 1,
    type: 'default',
    value: 'Notification Value',
    html: null,
};

describe('NotificationItem', () => {
    test('renders notification item with default type', () => {
        render(
            <NotificationItem
                type={mockNotification.type}
                value={mockNotification.value}
                html={mockNotification.html}
                markAsRead={mockMarkAsRead}
                id={mockNotification.id}
            />
        );

        const notificationItem = screen.getByText(mockNotification.value);
        expect(notificationItem).toBeInTheDocument();
        expect(notificationItem).toHaveAttribute(
            'data-notification-type',
            mockNotification.type
        );
        expect(notificationItem).toHaveStyle({ color: 'blue' });
    });

    test('renders notification item with red type', () => {
        const redNotification = {
            ...mockNotification,
            type: 'urgent',
        };

        render(
            <NotificationItem
                type={redNotification.type}
                value={redNotification.value}
                html={redNotification.html}
                markAsRead={mockMarkAsRead}
                id={redNotification.id}
            />
        );

        const notificationItem = screen.getByText(redNotification.value);
        expect(notificationItem).toBeInTheDocument();
        expect(notificationItem).toHaveAttribute(
            'data-notification-type',
            redNotification.type
        );
        expect(notificationItem).toHaveStyle({ color: 'red' });
    });

    test('renders notification item with HTML content', () => {
        const htmlContent = {
            __html: '<strong>HTML Notification</strong>',
        };

        render(
            <NotificationItem
                type={mockNotification.type}
                value={mockNotification.value}
                html={htmlContent}
                markAsRead={mockMarkAsRead}
                id={mockNotification.id}
            />
        );

        const notificationItem = screen.getByRole('listitem');
        expect(notificationItem).toBeInTheDocument();
        expect(notificationItem).toContainHTML(
            '<div><strong>HTML Notification</strong></div>'
        );
    });

    test('calls markAsRead function when clicked', () => {
        render(
            <NotificationItem
                type={mockNotification.type}
                value={mockNotification.value}
                html={mockNotification.html}
                markAsRead={mockMarkAsRead}
                id={mockNotification.id}
            />
        );

        const notificationItem = screen.getByText(mockNotification.value);
        fireEvent.click(notificationItem);
        expect(mockMarkAsRead).toHaveBeenCalledWith(mockNotification.id);
    });
});
