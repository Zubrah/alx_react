import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('<CourseList />', () => {
    it('renders the table with correct headers', () => {
        const listCourses = [];
        render(<CourseList listCourses={listCourses} />);

        const table = screen.getByRole('table');
        const headerCells = screen.getAllByRole('columnheader');

        expect(table).toBeInTheDocument();
        expect(headerCells).toHaveLength(2);
        expect(headerCells[0]).toHaveTextContent('Course name');
        expect(headerCells[1]).toHaveTextContent('Credit');
    });


    it('renders "No course available yet" when listCourses is empty', () => {
        const listCourses = [];
        render(<CourseList listCourses={listCourses} />);

        const noCourseCell = screen.getByText('No course available yet');
        expect(noCourseCell).toBeInTheDocument();
    });

    it('renders the course rows when listCourses has items', () => {
        const listCourses = [
            { id: 1, name: 'Math', credit: 3 },
            { id: 2, name: 'Science', credit: 4 },
        ];
        render(<CourseList listCourses={listCourses} />);

        const courseRows = screen.getAllByRole('row');
        expect(courseRows).toHaveLength(3); // 2 rows + 1 header row

        const firstCourseCell = screen.getByText('Math');
        const secondCourseCell = screen.getByText('Science');
        expect(firstCourseCell).toBeInTheDocument();
        expect(secondCourseCell).toBeInTheDocument();
    });
});
