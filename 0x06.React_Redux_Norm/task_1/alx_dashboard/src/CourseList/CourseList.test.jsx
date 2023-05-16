import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CourseList from './CourseList';

describe('<CourseList />', () => {
    it('renders the table with correct headers', async () => {
        const listCourses = [];
        render(<CourseList listCourses={listCourses} />);

        const table = screen.getByRole('table');
        const headerCells = await screen.findAllByRole('columnheader');

        await waitFor(() => {
            expect(table).toBeInTheDocument();
            //expect(headerCells).toHaveLength(2);
            expect(headerCells[0]).toHaveTextContent('Available Course');
            expect(headerCells[1]).toHaveTextContent('Credit');
        });
    });

    it('renders "No course available yet" when listCourses is empty', async () => {
        const listCourses = [];
        render(<CourseList listCourses={listCourses} />);

        const noCourseCell = await screen.findByText('No course available yet');
        await waitFor(() => {
            expect(noCourseCell).toBeInTheDocument();
        });
    });

    it('renders the course rows when listCourses has items', async () => {
        const listCourses = [
            { id: 1, name: 'Math', credit: 3 },
            { id: 2, name: 'Science', credit: 4 },
        ];
        render(<CourseList listCourses={listCourses} />);

        const courseRows = await screen.findAllByRole('row');
        await waitFor(() => {
            expect(courseRows).toHaveLength(4); // 2 rows + 1 header row

            const firstCourseCell = screen.getByText('Math');
            const secondCourseCell = screen.getByText('Science');
            expect(firstCourseCell).toBeInTheDocument();
            expect(secondCourseCell).toBeInTheDocument();
        });
    });
});
