import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications';



// Test for App
describe('App component', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    // Test for  app_header
    it('renders a div with class app_header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.app_header')).toHaveLength(1);
    });

    // test for app_body
    it('renders a div with class app-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.app_body')).toHaveLength(1);
    });

    // test for app_footer 
    it('renders a div with class app_footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.app_footer')).toHaveLength(1);
    });
});



// Test for Notifications 
describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Here is the list of notifications');
    });
});
