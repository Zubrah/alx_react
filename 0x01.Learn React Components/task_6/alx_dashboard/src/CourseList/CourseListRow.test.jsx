import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    test('renders header row with one cell', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow isHeader={true} textFirstCell="Available courses" />
                </tbody>
            </table>
        );

        // Assert that the header row exists
        const headerRow = screen.getByRole('row');
        expect(headerRow).toBeInTheDocument();

        // Assert that the header cell exists and has the correct text content
        const headerCell = screen.getByRole('columnheader', { name: 'Available courses' });
        expect(headerCell).toBeInTheDocument();
        expect(headerCell.getAttribute('colspan')).toBe('2');
    });

    test('renders header row with two cells', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow
                        isHeader={true}
                        textFirstCell="Course name"
                        textSecondCell="Credit"
                    />
                </tbody>
            </table>
        );

        // Assert that the header row exists
        const headerRow = screen.getByRole('row');
        expect(headerRow).toBeInTheDocument();

        // Assert that the header cells exist and have the correct text content
        const headerCells = screen.getAllByRole('columnheader');
        expect(headerCells).toHaveLength(2);
        expect(headerCells[0]).toHaveTextContent('Course name');
        expect(headerCells[1]).toHaveTextContent('Credit');
    });

    test('renders data row with two cells', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow textFirstCell="ES6" textSecondCell="60" />
                </tbody>
            </table>
        );

        // Assert that the data row exists
        const dataRow = screen.getByRole('row');
        expect(dataRow).toBeInTheDocument();

        // Assert that the data cells exist and have the correct text content
        const dataCells = screen.getAllByRole('cell');
        expect(dataCells).toHaveLength(2);
        expect(dataCells[0]).toHaveTextContent('ES6');
        expect(dataCells[1]).toHaveTextContent('60');
    });
});
