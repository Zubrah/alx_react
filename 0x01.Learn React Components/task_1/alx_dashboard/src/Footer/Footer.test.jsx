import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

// Test for Footer without crashing
describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    // Test for Copyright icon
    it('contains the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('© ');
    });
});
