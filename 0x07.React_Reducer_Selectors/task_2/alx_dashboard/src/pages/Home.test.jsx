import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Home component', () => {
    test('renders without errors', () => {
        render(<Home />);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getByText('School dashboard')).toBeInTheDocument();
        expect(screen.getByText(/Let's get started to Learn, Develop projects/)).toBeInTheDocument();
        expect(screen.getByText('Welcome!')).toBeInTheDocument();
        expect(screen.getByText('2023')).toBeInTheDocument();
    });

    test('displays logo', () => {
        render(<Home />);
        expect(screen.getByAltText('logo')).toBeInTheDocument();
    });

    test('displays header text', () => {
        render(<Home />);
        expect(screen.getByText('School dashboard')).toBeInTheDocument();
    });

    test('displays body content', () => {
        render(<Home />);
        expect(screen.getByText(/Let's get started to Learn, Develop projects/)).toBeInTheDocument();
    });

    test('navigates to dashboard on button click', async () => {
        const navigateMock = jest.fn();
        useNavigate.mockReturnValue(navigateMock);

        render(<Home />);
        fireEvent.click(screen.getByText('Welcome!'));
        await waitFor(() => expect(navigateMock).toHaveBeenCalledWith('/dashboard'));
    });

    test('displays footer content', () => {
        render(<Home />);
        expect(screen.getByText('2023')).toBeInTheDocument();
    });
});
