import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('renders the header with correct title and logo', async () => {
    render(<Header />);

    const title = await screen.findByText('School dashboard');
    const logo = screen.getByAltText('logo');

    await waitFor(() => {
      expect(title).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
    });
  });

  it('does not render the logout section when user is not logged in', async () => {
    render(<Header />);

    const logoutSection = screen.queryByTestId('logout-section');

    await waitFor(() => {
      expect(logoutSection).toBeNull();
    });
  });

  it('renders the logout section with user email when user is logged in', async () => {
    const user = { email: 'test@example.com' };
    render(<Header user={user} />);

    const logoutSection = await screen.findByTestId('logout-section');
    const emailText = screen.getByText('Welcome test@example.com');
    const logoutLink = screen.getByText('(logout)');

    await waitFor(() => {
      expect(logoutSection).toBeInTheDocument();
      expect(emailText).toBeInTheDocument();
      expect(logoutLink).toBeInTheDocument();
    });
  });
});
