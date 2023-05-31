import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from './utils';

describe('Notifications component', () => {
    it('renders the component without crashing', () => {
        render(<Notifications />);
        const notificationsComponent = screen.getByTestId('notifications-component');
        expect(notificationsComponent).toBeInTheDocument();
    });

    it('displays the close button and calls onClick when clicked', () => {
        const mockOnClick = jest.fn();
        render(<Notifications />);
        const closeButton = screen.getByAltText('Close');
        expect(closeButton).toBeInTheDocument();
        fireEvent.click(closeButton);
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('displays the list of notifications', () => {
        render(<Notifications />);
        const notificationList = screen.getByRole('list');
        expect(notificationList).toBeInTheDocument();
    });

    it('displays the correct number of list items', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
    });

    it('displays the correct text in the list items', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent('New course available');
        expect(listItems[1]).toHaveTextContent('New resume available');
        expect(listItems[2]).toHaveTextContent(getLatestNotification());
    });
});
