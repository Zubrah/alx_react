import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

jest.mock('./CourseList.module.css', () => ({}));

describe('CourseListRow', () => {
    test('renders header row correctly', () => {
        render(<CourseListRow textFirstCell="Course" textSecondCell="Credit" isHeader={true} />);
        expect(screen.getByText('Course')).toBeInTheDocument();
        expect(screen.getByText('Credit')).toBeInTheDocument();
        expect(screen.getByRole('row')).toHaveClass('headerRow');
    });

    test('renders regular row correctly', () => {
        render(<CourseListRow textFirstCell="ES6" textSecondCell={60} isHeader={false} />);
        expect(screen.getByText('ES6')).toBeInTheDocument();
        expect(screen.getByText('60')).toBeInTheDocument();
        expect(screen.getByRole('row')).toHaveClass('row');
    });
});
