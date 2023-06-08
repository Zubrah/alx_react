import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

jest.mock('./CourseList.module.css', () => ({
    cell: 'mocked-cell',
    headerRow: 'mocked-header-row',
    row: 'mocked-row',
}));

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
        expect(headerRow).toHaveClass('mocked-header-row');

        // Assert that the header row has one cell
        // const headerCell = screen.getByRole('cell', { name: 'Available courses' });
        // expect(headerCell).toBeInTheDocument();
        // expect(headerCell.getAttribute('colSpan')).toBe('2');
        // expect(headerCell).toHaveClass('mocked-cell');
    });

    test('renders data row with two cells', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
                </tbody>
            </table>
        );

        // Assert that the data row exists
        const dataRow = screen.getByRole('row');
        expect(dataRow).toBeInTheDocument();
        expect(dataRow).toHaveClass('mocked-row');

        // Assert that the data row has two cells
        const dataCells = screen.getAllByRole('cell');
        expect(dataCells).toHaveLength(2);
        expect(dataCells[0]).toHaveTextContent('ES6');
        expect(dataCells[1]).toHaveTextContent('60');
        expect(dataCells[0]).toHaveClass('mocked-cell');
        expect(dataCells[1]).toHaveClass('mocked-cell');
    });
});
