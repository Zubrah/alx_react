import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
    it('renders a div with the class bodySectionWithMargin', () => {
        render(
            <BodySectionWithMarginBottom title="Test">
                <p>Some text</p>
            </BodySectionWithMarginBottom>
        );
        expect(screen.getByTestId('body-section-with-margin')).toBeInTheDocument();
    });

    it('renders a BodySection component with the same props', () => {
        render(
            <BodySectionWithMarginBottom title="Test">
                <p>Some text</p>
            </BodySectionWithMarginBottom>
        );
        expect(screen.getByTestId('body-section')).toBeInTheDocument();
        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByText('Some text')).toBeInTheDocument();
    });

    it('applies a margin bottom of 40px', () => {
        render(
            <BodySectionWithMarginBottom title="Test">
                <p>Some text</p>
            </BodySectionWithMarginBottom>
        );
        expect(screen.getByTestId('body-section-with-margin')).toHaveStyle({ marginBottom: '40px' });
    });
});
