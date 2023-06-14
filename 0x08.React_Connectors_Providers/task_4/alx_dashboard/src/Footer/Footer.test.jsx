import React from 'react';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Footer from './Footer';

// Mock Redux store
const initialState = {
    user: {
        isLoggedIn: true,
    },
};

const reducer = (state = initialState) => state;
const store = createStore(reducer);

// Mock aphrodite styles
jest.mock('aphrodite', () => ({
    StyleSheet: {
        create: jest.fn(() => ({})),
    },
    css: jest.fn(() => ''),
}));

describe('Footer', () => {
    it('renders the footer component', () => {
        render(
            <Provider store={store}>
                <Footer />
            </Provider>
        );

        // Assert that the footer content is rendered
        //expect(screen.getByText(/Footer Text/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact us!/i)).toBeInTheDocument();
        expect(screen.getByText(/© \d{4}/i)).toBeInTheDocument();
    });

    it('renders the contact button when user is logged in', () => {
        render(
            <Provider store={store}>
                <Footer />
            </Provider>
        );

        // Assert that the contact button is rendered
        expect(screen.getByText(/Contact us!/i)).toBeInTheDocument();
    });

    it('does not render the contact button when user is not logged in', () => {
        const store = createStore(() => ({ user: { isLoggedIn: false } }));

        render(
            <Provider store={store}>
                <Footer />
            </Provider>
        );

        // Assert that the contact button is not rendered
        expect(screen.queryByText(/Contact us!/i)).toBeNull();
    });
});
