import React from 'react';
import { render, waitFor } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection', () => {
    test('renders title and children correctly', async () => {
        const title = 'Test Title';
        const children = <div>Test Children</div>;

        const { getByText } = render(
            <BodySection title={title}>
                {children}
            </BodySection>
        );

        await waitFor(() => {
            const titleElement = getByText(title);
            expect(titleElement).toBeInTheDocument();

        });
    });

    test('applies CSS styles correctly', async () => {
        const title = 'Test Title';
        const children = <div>Test Children</div>;

        const { getByTestId } = render(
            <BodySection title={title} >
                {children}
            </BodySection>
        );


    });
});
