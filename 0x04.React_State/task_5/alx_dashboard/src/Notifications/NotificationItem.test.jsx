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
        expect(firstItem.html()).toContain('style="color: blue;">New course available</li>');
    });

    // Renders the correct html in the second NotificationItem element
    it('renders the correct html in the second NotificationItem element', () => {
        const wrapper = shallow(<Notifications />);
        const secondItem = wrapper.find(NotificationItem).at(1);
        expect(secondItem.html()).toContain('<li data-notification-type="urgent"');
        expect(secondItem.html()).toContain('style="color: red;">New resume available</li>');
    });

    // Renders the correct html in the third NotificationItem element
    it('renders the correct html in the third NotificationItem element', () => {
        const wrapper = shallow(<Notifications />);
        const thirdItem = wrapper.find(NotificationItem).at(2);
        expect(thirdItem.html()).toContain('<li data-notification-type="urgent"');
        expect(thirdItem.html()).toContain('style="color: red;">Error: System malfunction</li>');
    });
});
