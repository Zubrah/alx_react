import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
    const defaultProps = {
        type: 'default',
        value: 'New notification',
        html: null,
        markAsRead: jest.fn(),
        id: 1,
    };

    it('renders a default notification item', () => {
        render(<NotificationItem {...defaultProps} />);
        const notificationItem = screen.getByText('New notification');
        expect(notificationItem).toBeInTheDocument();
        //expect(notificationItem).toHaveStyle('color: blue');
    });

    it('renders an urgent notification item', () => {
        const props = {
            ...defaultProps,
            type: 'urgent',
            value: 'Urgent notification',
        };
        render(<NotificationItem {...props} />);
        const notificationItem = screen.getByText('Urgent notification');
        expect(notificationItem).toBeInTheDocument();
        //expect(notificationItem).toHaveStyle('color: red');
    });

    it('calls markAsRead when clicked', async () => {
        render(<NotificationItem {...defaultProps} />);
        const notificationItem = screen.getByText('New notification');
        fireEvent.click(notificationItem);
        await waitFor(() => {
            expect(defaultProps.markAsRead).toHaveBeenCalledWith(1);
        });
    });

    it('renders an HTML notification item', () => {
        const props = {
            ...defaultProps,
            html: { __html: '<strong>HTML notification</strong>' },
            value: null,
        };
        render(<NotificationItem {...props} />);
        const notificationItem = screen.getByText('HTML notification');
        expect(notificationItem).toBeInTheDocument();
        //expect(notificationItem).toHaveStyle('color: blue');
        expect(notificationItem.nodeName).toBe('STRONG');
    });
});
