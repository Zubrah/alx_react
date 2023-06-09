import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

// Mock the CSS module
jest.mock('./CourseList.module.css', () => ({
    courseList: 'mocked-courseList',
}));

describe('CourseList', () => {
    test('renders the course list table', () => {
        render(<CourseList />);

        // Assert that the table element exists
        const courseListTable = screen.getByRole('table', { id: 'CourseList' });
        expect(courseListTable).toBeInTheDocument();

        // Assert that the table has the appropriate CSS class
        expect(courseListTable).toHaveClass('mocked-courseList');

        // Assert that the table has the correct table headers
        const courseListHeaders = screen.getAllByRole('columnheader');
        expect(courseListHeaders).toHaveLength(2);
        expect(courseListHeaders[0]).toHaveTextContent('Available courses');
        expect(courseListHeaders[1]).toHaveTextContent('Course name');
        //expect(courseListHeaders[2]).toHaveTextContent('Credit');

        // Assert that the table has the correct table rows
        const courseListRows = screen.getAllByRole('row');
        expect(courseListRows).toHaveLength(3); // Including the header row
        expect(courseListRows[1]).toHaveTextContent('Course name');
        //expect(courseListRows[1]).toHaveTextContent('60');
        expect(courseListRows[2]).toHaveTextContent('No course available yet');
        //expect(courseListRows[2]).toHaveTextContent('20');
        //expect(courseListRows[3]).toHaveTextContent('Webpack20');
        //expect(courseListRows[3]).toHaveTextContent('40');
    });
});
