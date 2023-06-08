import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

// Mock the necessary components
jest.mock('./Notifications/Notifications', () => () => <div>Mock Notifications</div>);
jest.mock('./CourseList/CourseList', () => ({ listCourses }) => (
    <div>
        Mock CourseList
        {listCourses.map((course) => (
            <div key={course.id}>{course.name}</div>
        ))}
    </div>
));
jest.mock('../Login/Login', () => () => <div>Mock Login</div>);
jest.mock('../Footer/Footer', () => () => <div>Mock Footer</div>);
jest.mock('../BodySection/BodySection', () => ({ title, children }) => (
    <div>
        Mock BodySection
        <h2>{title}</h2>
        {children}
    </div>
));
jest.mock('../BodySection/BodySectionWithMarginBottom', () => ({ title, children }) => (
    <div>
        Mock BodySectionWithMarginBottom
        <h2>{title}</h2>
        {children}
    </div>
));

describe('Dashboard', () => {
    test('renders Dashboard component with all sections', () => {
        render(<Dashboard />);
        // Add assertions for the rendered components and their content
        expect(screen.getByText('Mock Notifications')).toBeInTheDocument();
        expect(screen.getByText('Mock CourseList')).toBeInTheDocument();
        expect(screen.getByText('ES6')).toBeInTheDocument();
        expect(screen.getByText('Webpack')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Mock Login')).toBeInTheDocument();
        expect(screen.getByText('Mock Footer')).toBeInTheDocument();
        expect(screen.getByText('Mock BodySection')).toBeInTheDocument();
        expect(screen.getByText('Course list')).toBeInTheDocument();
        expect(screen.getByText('Mock BodySectionWithMarginBottom')).toBeInTheDocument();
        expect(screen.getByText('Log in Access Full Dashboard')).toBeInTheDocument();
        expect(screen.getByText('News from the School')).toBeInTheDocument();
    });
});
