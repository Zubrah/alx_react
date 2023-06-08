import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

// Mock CSS modules
jest.mock('./Dashboard.module.css', () => ({
    container: 'mocked-container',
    column1: 'mocked-column1',
    column2: 'mocked-column2',
    header: 'mocked-header',
    logo: 'mocked-logo',
    menuItem: 'mocked-menuItem',
}));

// Mock Notifications component
jest.mock('./Notifications/Notifications', () => () => (
    <div data-testid="mocked-notifications">Mocked Notifications</div>
));

// Mock CourseList component
jest.mock('./CourseList/CourseList', () => ({ listCourses }) => (
    <div data-testid="mocked-course-list">
        Mocked Course List
        {listCourses.map((course) => (
            <div key={course.id}>{course.name}</div>
        ))}
    </div>
));

// Mock Login component
jest.mock('./Login/Login', () => () => (
    <div data-testid="mocked-login">Mocked Login</div>
));

// Mock Footer component
jest.mock('./Footer/Footer', () => () => (
    <div data-testid="mocked-footer">Mocked Footer</div>
));

// Mock BodySection component
jest.mock('./BodySection/BodySection', () => ({ title, children }) => (
    <div data-testid="mocked-body-section">
        <h2>{title}</h2>
        {children}
    </div>
));

// Mock BodySectionWithMarginBottom component
jest.mock('./BodySection/BodySectionWithMarginBottom', () => ({ title, children }) => (
    <div data-testid="mocked-body-section-with-margin-bottom">
        <h2>{title}</h2>
        {children}
    </div>
));

describe('Dashboard', () => {
    test('renders the dashboard with notifications, course list, login, and footer', () => {
        render(<Dashboard />);

        // Assert the presence of mocked components
        expect(screen.getByTestId('mocked-notifications')).toBeInTheDocument();
        expect(screen.getByTestId('mocked-course-list')).toBeInTheDocument();
        expect(screen.getByTestId('mocked-login')).toBeInTheDocument();
        expect(screen.getByTestId('mocked-footer')).toBeInTheDocument();

        // Assert the presence of mocked BodySection components
        expect(screen.getByTestId('mocked-body-section')).toBeInTheDocument();
        expect(screen.getByTestId('mocked-body-section-with-margin-bottom')).toBeInTheDocument();

        // Assert the text content
        expect(screen.getByText('Mocked Notifications')).toBeInTheDocument();
        expect(screen.getByText('Mocked Course List')).toBeInTheDocument();
        expect(screen.getByText('Mocked Login')).toBeInTheDocument();
        expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
    });


});
