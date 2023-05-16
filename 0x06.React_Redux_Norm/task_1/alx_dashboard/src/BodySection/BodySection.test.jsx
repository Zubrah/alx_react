import React from 'react';
import { render, waitFor } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection', () => {
    test('renders title and children correctly', async () => {
        const title = 'Test Title';
        const children = <div data-testid="body-section-children">Test Children</div>;

        const { getByText } = render(
            <BodySection title={title}>{children}</BodySection>
        );

        await waitFor(() => {
            const titleElement = getByText(title);

            expect(titleElement).toBeInTheDocument();
            expect(getByText('Test Children')).toBeInTheDocument();
        });
    });

    test('applies CSS styles correctly', async () => {
        const title = 'Test Title';
        const children = <div data-testid="body-section-children">Test Children</div>;

        const { getByTestId } = render(
            <BodySection title={title}>{children}</BodySection>
        );

        await waitFor(() => {
            const bodySectionElement = getByTestId('body-section');
            const styles = window.getComputedStyle(bodySectionElement);

            expect(styles.marginBottom).toBe('10px');
            expect(styles.marginLeft).toBe('10px');
        });
    });
});
