import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders a header row with the provided text', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </tbody>
            </table>
        );

        const headerRow = screen.getByRole('row');
        const headerCells = screen.getAllByRole('columnheader');

        expect(headerRow).toBeInTheDocument();
        expect(headerCells).toHaveLength(2);
        expect(headerCells[0]).toHaveTextContent('Course name');
        expect(headerCells[1]).toHaveTextContent('Credit');
    });

    it('renders a regular row with the provided text and checkbox', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow textFirstCell="Math" textSecondCell={3} isHeader={false} />
                </tbody>
            </table>
        );

        const row = screen.getByRole('row');
        const cells = screen.getAllByRole('cell');
        const checkbox = screen.getByRole('checkbox');

        expect(row).toBeInTheDocument();
        expect(cells).toHaveLength(2);
        expect(cells[0]).toHaveTextContent('Math');
        expect(cells[1]).toHaveTextContent('3');
        expect(checkbox).toBeInTheDocument();
    });

    it('toggles the checkbox when clicked', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow textFirstCell="Math" textSecondCell={3} isHeader={false} />
                </tbody>
            </table>
        );

        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();

        fireEvent.click(checkbox);

        expect(checkbox).not.toBeChecked();
    });
});
