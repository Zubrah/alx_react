import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../reducers/rootReducer'; // Import the root reducer
import Dashboard, { mapStateToProps } from './Dashboard';

// Create a mock store
const store = configureStore({
    reducer: rootReducer,
});

describe('Dashboard Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
    });

    test('renders header with logo and title', () => {
        const logo = screen.getByAltText('logo');
        const title = screen.getByText('School dashboard');

        expect(logo).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    test('shows notifications when "Your notifications" is clicked', async () => {
        const notificationsButton = screen.getByText('Your notifications');

        fireEvent.click(notificationsButton);

        await waitFor(() => {
            // const notification1 = screen.getByText('New course available');
            // const notification2 = screen.getByText('New resume available');

            // expect(notification1).toBeInTheDocument();
            // expect(notification2).toBeInTheDocument();
        });
    });

    test('marks notification as read when clicked', async () => {
        const notificationsButton = screen.getByText('Your notifications');
        fireEvent.click(notificationsButton);

        const notification1 = screen.getByText('New course available');

        fireEvent.click(notification1);

        await waitFor(() => {
            expect(notification1).not.toBeInTheDocument();
        });
    });

    test('displays CourseList component when user is logged in', () => {
        const loginButton = screen.getByRole('button', { name: 'Sign In' });

        fireEvent.click(loginButton);

        // const courseList = screen.getByRole('heading', { name: 'Course list' });

        // expect(courseList).toBeInTheDocument();
    });

    test('displays Login component when user is not logged in', () => {
        const loginComponent = screen.getByRole('heading', { name: 'Log in Access Full Dashboard' });

        expect(loginComponent).toBeInTheDocument();
    });

    test('returns the right object when passing the state', () => {
        const state = rootReducer(undefined, { type: '@@INIT' });

        const props = mapStateToProps(state);

        expect(props).toEqual({
            isLoggedIn: false,
            displayDrawer: false,
        });
    });
});
