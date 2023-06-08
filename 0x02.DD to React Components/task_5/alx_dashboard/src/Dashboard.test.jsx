import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

// Mock the necessary components
jest.mock('./Notifications/Notifications.jsx', () => () => <div>Mock Notifications</div>);
jest.mock('./CourseList/CourseList.jsx', () => ({ listCourses }) => (
    <div>
        Mock CourseList
        {listCourses.map((course) => (
            <div key={course.id}>{course.name}</div>
        ))}
    </div>
));
jest.mock('./Login/Login.jsx', () => () => <div>Mock Login</div>);
jest.mock('./Footer/Footer.jsx', () => () => <div>Mock Footer</div>);
jest.mock('./BodySection/BodySection.jsx', () => ({ title, children }) => (
    <div>
        Mock BodySection
        <h2>{title}</h2>
        {children}
    </div>
));
jest.mock('./BodySection/BodySectionWithMarginBottom.jsx', () => ({ title, children }) => (
    <div>
        Mock BodySectionWithMarginBottom
        <h2>{title}</h2>
        {children}
    </div>
));
jest.mock('./HOC/WithLogging.jsx', () => (Component) => (props) => (
    <div>
        Mock WithLogging
        <Component {...props} />
    </div>
));

describe('Dashboard', () => {
    test('renders Dashboard component with all sections when logged in', () => {
        render(<Dashboard />);
        // Add assertions for the rendered components and their content
        expect(screen.getByText('Mock Notifications')).toBeInTheDocument();
        expect(screen.getByText('Mock CourseList')).toBeInTheDocument();
        expect(screen.getByText('ES6')).toBeInTheDocument();
        expect(screen.getByText('Webpack')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.queryByText('Mock Login')).not.toBeInTheDocument();
        expect(screen.getByText('Mock Footer')).toBeInTheDocument();
        expect(screen.getByText('Mock BodySection')).toBeInTheDocument();
        expect(screen.getByText('Course list')).toBeInTheDocument();
        expect(screen.getByText('Mock BodySectionWithMarginBottom')).toBeInTheDocument();
        expect(screen.queryByText('Log in Access Full Dashboard')).not.toBeInTheDocument();
        expect(screen.getByText('News from the School')).toBeInTheDocument();
    });

    test('renders Dashboard component with all sections when logged out', () => {
        render(<Dashboard isLoggedIn={false} />);
        // Add assertions for the rendered components and their content
        expect(screen.getByText('Mock Notifications')).toBeInTheDocument();
        expect(screen.queryByText('Mock CourseList')).not.toBeInTheDocument();
        expect(screen.queryByText('ES6')).not.toBeInTheDocument();
        expect(screen.queryByText('Webpack')).not.toBeInTheDocument();
        expect(screen.queryByText('React')).not.toBeInTheDocument();
        expect(screen.getByText('Mock Login')).toBeInTheDocument();
        expect(screen.getByText('Mock Footer')).toBeInTheDocument();
        expect(screen.getByText('Mock BodySection')).toBeInTheDocument();
        expect(screen.queryByText('Course list')).not.toBeInTheDocument();
        expect(screen.getByText('Mock BodySectionWithMarginBottom')).toBeInTheDocument();
        expect(screen.getByText('Log in Access Full Dashboard')).toBeInTheDocument();
        expect(screen.getByText('News from the School')).toBeInTheDocument();
    });
});
