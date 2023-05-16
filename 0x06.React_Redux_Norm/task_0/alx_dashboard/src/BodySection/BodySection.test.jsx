import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe('<BodySection />', () => {
    it('renders a div with the class bodySection', () => {
        render(<BodySection title="Test" />);
        expect(screen.getByTestId('body-section')).toBeInTheDocument();
    });

    it('renders a h2 element with the title prop', () => {
        render(<BodySection title="Test" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('renders the children passed to BodySection', () => {
        render(
            <BodySection title="Test">
                <p>Some text</p>
            </BodySection>
        );
        expect(screen.getByText('Some text')).toBeInTheDocument();
        expect(screen.getByText('Some text').nodeName).toBe('P');
    });
});
