// Implement tests for BodySectionWithMarginBottom.jsx
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom />', () => {
    it('renders a div with the class bodySectionWithMargin', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="Test">
                <p>Some text</p>
            </BodySectionWithMarginBottom>
        );
        expect(wrapper.find('div.bodySectionWithMargin')).toHaveLength(1);
    });

    it('renders a BodySection component with the same props', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="Test">
                <p>Some text</p>
            </BodySectionWithMarginBottom>
        );
        expect(wrapper.find(BodySection)).toHaveLength(1);
        expect(wrapper.find(BodySection).props()).toEqual({ title: 'Test', children: <p>Some text</p> });
    });

    it('applies a margin bottom of 40px', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="Test">
                <p>Some text</p>
            </BodySectionWithMarginBottom>
        );
        expect(wrapper.find('div.bodySectionWithMargin').prop('style')).toEqual({ marginBottom: '40px' });
    });
});
