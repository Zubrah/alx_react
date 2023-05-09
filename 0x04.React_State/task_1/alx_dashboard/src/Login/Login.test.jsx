import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

// renders Login without crashing
describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    // Renders two inputs and labels 
    it('renders two input and two label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });


    it('should render without throwing an error', () => {
        expect(wrapper.find('form.login').exists()).toBe(true);
    });

    it('should render a username input', () => {
        expect(wrapper.find('input#username').length).toEqual(1);
    });

    it('should render a password input', () => {
        expect(wrapper.find('input#password').length).toEqual(1);
    });

    it('should submit form with given values', () => {
        const username = 'testuser';
        const password = 'testpassword';
        wrapper.find('input#username').simulate('change', { target: { value: username } });
        wrapper.find('input#password').simulate('change', { target: { value: password } });
        wrapper.find('form.login').simulate('submit', { preventDefault: () => { } });
        expect(wrapper.find('input#username').prop('value')).toEqual(username);
        expect(wrapper.find('input#password').prop('value')).toEqual(password);
    });
});
