// notificationReducer.test.js
import notificationReducer from './notificationReducer';
import {
    markAsRead,
    setNotificationFilter,
    fetchNotificationsSuccess,
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionCreators';

describe('notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual({
            filter: 'DEFAULT',
            notifications: [],
        });
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const data = [
            {
                id: 1,
                type: 'default',
                value: 'New course available',
            },
            {
                id: 2,
                type: 'urgent',
                value: 'New resume available',
            },
            {
                id: 3,
                type: 'urgent',
                value: 'New data available',
            },
        ];

        const expectedState = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };

        expect(notificationReducer(undefined, fetchNotificationsSuccess(data))).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };

        const expectedState = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: true,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };

        expect(notificationReducer(initialState, markAsRead(1))).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const initialState = {
            filter: 'DEFAULT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };

        const expectedState = {
            filter: 'URGENT',
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    isRead: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    isRead: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ],
        };

        expect(notificationReducer(initialState, setNotificationFilter('URGENT'))).toEqual(expectedState);
    });
});
