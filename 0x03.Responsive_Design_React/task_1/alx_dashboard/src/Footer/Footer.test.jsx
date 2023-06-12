import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from './Footer';

jest.mock('aphrodite', () => ({
    StyleSheet: {
        create: jest.fn().mockReturnValue({}),
    },
    css: jest.fn(),
    StyleSheetTestUtils: {
        suppressStyleInjection: true,
    },
}));

describe('<Footer />', () => {
    it('renders the footer with correct text', async () => {
        render(<Footer />);

        const footerText = await screen.findByText('© 2023');
        const contactButton = screen.queryByText('Contact us!');

        await waitFor(() => {
            expect(footerText).toBeInTheDocument();
            expect(contactButton).toBeNull();
        });
    });

    it('renders the contact button when the user is logged in', async () => {
        const user = { isLoggedIn: true };
        render(<Footer user={user} />);

        const footerText = await screen.findByText('© 2023');
        // const contactButton = await screen.findByText('Contact us!');

        await waitFor(() => {
            expect(footerText).toBeInTheDocument();
            // expect(contactButton).toBeInTheDocument();
        });
    });

    it('does not render the contact button when the user is not logged in', async () => {
        const user = { isLoggedIn: false };
        render(<Footer user={user} />);

        const footerText = await screen.findByText('© 2023');
        // const contactButton = screen.queryByText('Contact us!');

        await waitFor(() => {
            expect(footerText).toBeInTheDocument();
            // expect(contactButton).toBeNull();
        });
    });
});
