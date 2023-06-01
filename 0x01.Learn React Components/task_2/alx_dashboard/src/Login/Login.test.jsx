import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

jest.mock('./Login.module.css', () => ({
    app_body: 'mock-app-body',
    body_btn: 'mock-body-btn',
    btn_wrap: 'mock-btn-wrap',
    button: 'mock-button',
}));

describe('Login component', () => {
    it('renders the login form', () => {
        render(<Login />);
        const loginForm = screen.getByLabelText('Email Address:');
        expect(loginForm).toBeInTheDocument();
    });
});
