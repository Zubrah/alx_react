import { Map } from 'immutable';
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from './notificationSelector';

describe('notificationSelector', () => {
    const initialState = {
        notifications: Map({
            filter: 'DEFAULT',
            notifications: Map({
                1: Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
                2: Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
                3: Map({ id: 3, isRead: true, type: 'urgent', value: 'New data available' }),
            }),
        }),
    };

    it('should return the filter type selected', () => {
        const state = initialState;
        const filterType = filterTypeSelected(state);
        expect(filterType).toEqual('DEFAULT');
    });

    it('should return the list of notifications', () => {
        const state = initialState;
        const notifications = getNotifications(state);
        const expectedNotifications = Map({
            1: Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
            2: Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
            3: Map({ id: 3, isRead: true, type: 'urgent', value: 'New data available' }),
        });
        expect(notifications).toEqual(expectedNotifications);
    });

    it('should return the list of unread notifications', () => {
        const state = initialState;
        const unreadNotifications = getUnreadNotifications(state);
        const expectedUnreadNotifications = Map({
            1: Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
            2: Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
        });
        expect(unreadNotifications).toEqual(expectedUnreadNotifications);
    });
});
