// Test for BodySection.jsx
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
    it('renders a div with the class bodySection', () => {
        const wrapper = shallow(<BodySection title="Test" />);
        expect(wrapper.find('div.bodySection')).toHaveLength(1);
    });

    it('renders a h2 element with the title prop', () => {
        const wrapper = shallow(<BodySection title="Test" />);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toEqual('Test');
    });

    it('renders the children passed to BodySection', () => {
        const wrapper = shallow(
            <BodySection title="Test">
                <p>Some text</p>
            </BodySection>
        );
        expect(wrapper.find('div.bodySection').children()).toHaveLength(2);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toEqual('Some text');
    });
});
