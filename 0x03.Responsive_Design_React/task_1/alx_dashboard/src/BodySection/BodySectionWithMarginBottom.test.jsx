import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

jest.mock('aphrodite', () => ({
    StyleSheet: {
        create: jest.fn(() => ({
            bodySectionWithMargin: 'mocked-body-section-with-margin',
        })),
    },
    css: jest.fn((styles) => styles),
}));

describe('BodySectionWithMarginBottom', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with the correct title and children', () => {
        const title = 'Test Title';
        const children = <div>Test Children</div>;

        const { getByText } = render(
            <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
        );

        const titleElement = getByText(title);
        const childrenElement = getByText('Test Children');

        expect(titleElement).toBeInTheDocument();
        expect(childrenElement).toBeInTheDocument();
    });

    it('applies the mocked CSS class', () => {
        render(<BodySectionWithMarginBottom title="Title">Children</BodySectionWithMarginBottom>);

        expect(document.querySelector('.mocked-body-section-with-margin')).toBeInTheDocument();
    });
});
