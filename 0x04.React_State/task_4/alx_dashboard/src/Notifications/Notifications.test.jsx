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
        expect(ya('ul').children()).toHaveLength(3);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders the <p> with the right string when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.setProps({ listNotifications: [] });
        expect(wrapper.find('p').text()).toEqual('No new notifications!');

    });

    it('checks if the component renders correctly', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a NotificationItem for each notification passed as props', () => {
        const notifications = [
            {
                type: 'urgent',
                value: 'New course available',
                id: 1,
            },
            {
                type: 'default',
                value: 'New resume available',
                id: 2,
            },
            {
                html: { __html: '<strong>Urgent</strong> warning - your account is about to expire.' },
                id: 3,
            },
        ];
        wrapper.setProps({ notifications });

        expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
    });

    it('calls the markNotificationAsRead function when a notification is clicked', () => {
        const notifications = [
            {
                type: 'default',
                value: 'New message from Jane',
                id: 4,
            },
        ];
        wrapper.setProps({ notifications });

        wrapper.find(NotificationItem).simulate('click');

        expect(markNotificationAsRead).toHaveBeenCalledWith(notifications[0].id);
    });



});
