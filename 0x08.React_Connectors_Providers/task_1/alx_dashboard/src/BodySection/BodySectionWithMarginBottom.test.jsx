import React from 'react';
import { render, waitFor } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
    test('renders title and children correctly', async () => {
        const title = 'Test Title';
        const children = <div>Test Children</div>;

        const { getByText } = render(
            <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
        );

        await waitFor(() => {
            const titleElement = getByText(title);

            expect(titleElement).toBeInTheDocument();
            expect(getByText('Test Children')).toBeInTheDocument();
        });
    });

    test('applies CSS styles correctly', async () => {
        const title = 'Test Title';
        const children = <div>Test Children</div>;

        const { getByText } = render(
            <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
        );

        await waitFor(() => {
            const bodySectionElement = getByText(title).parentNode; // Find the parent element
            const styles = window.getComputedStyle(bodySectionElement);

            expect(styles.marginBottom).toBe('10px');
        });
    });
});
