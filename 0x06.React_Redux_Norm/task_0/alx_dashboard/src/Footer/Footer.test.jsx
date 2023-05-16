import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
    it('renders the footer with the correct content', () => {
        render(<Footer />);

        const footer = screen.getByRole('contentinfo');
        const copyElement = screen.getByText('©');
        const contactElement = screen.getByText('Contact us!');

        expect(footer).toBeInTheDocument();
        expect(copyElement).toBeInTheDocument();
        expect(contactElement).toBeInTheDocument();
    });

    it('displays the correct footer copy', () => {
        render(<Footer />);

        const copyElement = screen.getByText(/2023/i);

        expect(copyElement).toHaveTextContent('2023');
    });

    it('displays "Contact us!" button when user is logged in', () => {
        render(<Footer />);

        const contactElement = screen.getByText('Contact us!');

        expect(contactElement).toBeInTheDocument();
    });

    it('does not display "Contact us!" button when user is not logged in', () => {
        render(<Footer />);

        const contactElement = screen.queryByText('Contact us!');

        expect(contactElement).not.toBeInTheDocument();
    });

    it('calls the onClick event handler when "Contact us!" button is clicked', () => {
        const onClickMock = jest.fn();
        render(<Footer onClick={onClickMock} />);

        const contactElement = screen.getByText('Contact us!');
        fireEvent.click(contactElement);

        expect(onClickMock).toHaveBeenCalled();
    });
});
