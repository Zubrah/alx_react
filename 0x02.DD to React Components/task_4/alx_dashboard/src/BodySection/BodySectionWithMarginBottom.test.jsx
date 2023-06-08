import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

// Mock the CSS module
jest.mock('./BodySection.module.css', () => ({
    bodySectionWithMargin: 'mock-bodySectionWithMargin',
}));

describe('BodySectionWithMarginBottom', () => {
    test('renders BodySectionWithMarginBottom component with title and children', () => {
        render(
            <BodySectionWithMarginBottom title="Test Title">
                <p>Test Content</p>
            </BodySectionWithMarginBottom>
        );
        // Add assertions for the rendered components and their content
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
});
