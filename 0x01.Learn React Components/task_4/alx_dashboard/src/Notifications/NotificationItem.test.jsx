import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


// Test for Notification Component
describe('Notifications', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    // Renders NotificationItem elements 
    it('renders NotificationItem elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    // Renders the correct html in the first NotificationItem element
    it('renders the correct html in the first NotificationItem element', () => {
        const wrapper = shallow(<Notifications />);
        const firstItem = wrapper.find(NotificationItem).at(0);
        expect(firstItem.html()).toContain('<li data-notification-type="default"');
        expect(firstItem.html()).toContain('style="color:blue;">New course available</li>');
    });
});
