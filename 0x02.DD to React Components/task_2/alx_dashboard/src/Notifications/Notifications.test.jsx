import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('renders an empty list when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('ul').children()).toHaveLength(0);
        expect(wrapper.find('p').text()).toEqual('No new notifications!');
    });

    it('renders a list with 3 items when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find('ul').children()).toHaveLength(3);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('calls markAsRead function when NotificationItem is clicked', () => {
        const mockMarkAsRead = jest.fn();
        const wrapper = shallow(
            <Notifications displayDrawer markAsRead={mockMarkAsRead} />
        );

        // Find the first NotificationItem and simulate a click event
        wrapper
            .find(NotificationItem)
            .at(0)
            .simulate('click');

        expect(mockMarkAsRead).toHaveBeenCalledWith(1);
    });

    it('checks if the component renders correctly', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
});
