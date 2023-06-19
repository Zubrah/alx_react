import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './Header';

const mockStore = configureStore([]);

describe('Header', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      user: {
        isLoggedIn: true,
        email: 'test@example.com',
      },
    };

    store = mockStore(initialState);
  });

  it('renders the header component', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // Assert the rendered text
    expect(screen.getByText('School dashboard')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('dispatches the logOut action when logout link is clicked', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // Click the logout link
    fireEvent.click(screen.getByText('Logout'));

    // Assert the dispatched action
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'LOG_OUT' }]);
  });
});
