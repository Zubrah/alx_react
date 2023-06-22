import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    const mockStore = configureStore([]);

    it('renders the Dashboard component with Login when not logged in', () => {
        const store = mockStore({
            ui: {
                isNotificationDrawerVisible: false,
            },
        });

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>
            </Provider>
        );

        const loginComponent = screen.getByTestId('login-component');
        expect(loginComponent).toBeInTheDocument();
    });

    it('renders the Dashboard component with CourseList and BodySection when logged in', () => {
        const store = mockStore({
            ui: {
                isNotificationDrawerVisible: true,
            },
        });

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Dashboard isLoggedIn />
                </BrowserRouter>
            </Provider>
        );

        const courseListComponent = screen.getByTestId('course-list-component');
        const bodySectionComponent = screen.getByTestId('body-section-component');

        expect(courseListComponent).toBeInTheDocument();
        expect(bodySectionComponent).toBeInTheDocument();
    });
});
