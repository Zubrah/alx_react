import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';


// Test for header without crashing
describe('Header', () => {
    it('should render without crashing', () => {
        shallow(<Header />);
    });


    // must have one img and h1 tags
    it('should render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});
