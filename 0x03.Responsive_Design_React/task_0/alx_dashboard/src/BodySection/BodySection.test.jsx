import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

// Mock the CSS module
jest.mock('./BodySection.module.css', () => ({
    bodySection: 'mock-bodySection',
}));

describe('BodySection', () => {
    test('renders BodySection component with title and children', () => {
        render(
            <BodySection title="Test Title">
                <p>Test Content</p>
            </BodySection>
        );
        // Add assertions for the rendered components and their content
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
});
