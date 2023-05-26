import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators', () => {
    test('markAsRead action creator', () => {
        const index = 1;
        const expectedAction = {
            type: MARK_AS_READ,
            index,
        };
        const action = markAsRead(index);
        expect(action).toEqual(expectedAction);
    });

    test('setNotificationFilter action creator - DEFAULT filter', () => {
        const filter = 'DEFAULT';
        const expectedAction = {
            type: SET_TYPE_FILTER,
            filter,
        };
        const action = setNotificationFilter(filter);
        expect(action).toEqual(expectedAction);
    });

    test('setNotificationFilter action creator - URGENT filter', () => {
        const filter = 'URGENT';
        const expectedAction = {
            type: SET_TYPE_FILTER,
            filter,
        };
        const action = setNotificationFilter(filter);
        expect(action).toEqual(expectedAction);
    });
});
