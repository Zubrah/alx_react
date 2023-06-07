import React from 'react';
import { render, waitFor } from '@testing-library/react';
import NotificationItem from './NotificationItem';

// Mock CSS module
jest.mock('', () => ({
    default: 'mocked-default-class',
    red: 'mocked-red-class',
    blue: 'mocked-blue-class',
}));

describe('NotificationItem', () => {
    it('renders the notification item with urgent type and HTML content', async () => {
        const props = {
            type: 'urgent',
            value: '',
            html: { __html: '<strong>New resume available</strong>' },
        };

        const { getByText, getByRole } = render(<NotificationItem {...props} />);
        const notificationItem = getByRole('listitem');

        await waitFor(() => {
            expect(notificationItem).toBeInTheDocument();
            expect(notificationItem).toHaveAttribute('data-notification-type', 'urgent');
            expect(notificationItem).toHaveStyle('color: red');
        });
    });
});
