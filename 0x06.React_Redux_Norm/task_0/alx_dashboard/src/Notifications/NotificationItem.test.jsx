import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    const mockId = 1;
    const mockValue = 'Notification value';
    const mockHtml = { __html: '<span>HTML notification</span>' };
    const mockMarkAsRead = jest.fn();

    it('renders a default notification item with the correct content', () => {
        render(
            <NotificationItem
                type="default"
                value={mockValue}
                markAsRead={mockMarkAsRead}
                id={mockId}
            />
        );

        const notificationItem = screen.getByText(mockValue);

        expect(notificationItem).toBeInTheDocument();
        expect(notificationItem).toHaveStyle({ color: 'blue' });
    });

    it('renders an urgent notification item with the correct content', () => {
        render(
            <NotificationItem
                type="urgent"
                value={mockValue}
                markAsRead={mockMarkAsRead}
                id={mockId}
            />
        );

        const notificationItem = screen.getByText(mockValue);

        expect(notificationItem).toBeInTheDocument();
        expect(notificationItem).toHaveStyle({ color: 'red' });
    });

    it('renders an HTML notification item with the correct content', () => {
        render(
            <NotificationItem
                type="default"
                html={mockHtml}
                markAsRead={mockMarkAsRead}
                id={mockId}
            />
        );

        const notificationItem = screen.getByText('HTML notification');

        expect(notificationItem).toBeInTheDocument();
        expect(notificationItem).toHaveStyle({ color: 'blue' });
    });

    it('calls the markAsRead function with the correct id when clicked', () => {
        render(
            <NotificationItem
                type="default"
                value={mockValue}
                markAsRead={mockMarkAsRead}
                id={mockId}
            />
        );

        const notificationItem = screen.getByText(mockValue);
        fireEvent.click(notificationItem);

        expect(mockMarkAsRead).toHaveBeenCalledWith(mockId);
    });
});
