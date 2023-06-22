import { Map, List } from 'immutable';
import notificationReducer from './notificationReducer';
import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(
            Map({
                notifications: List(),
                filter: 'all',
                loading: false,
            })
        );
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const initialState = Map({
            notifications: List(),
            filter: 'all',
            loading: false,
        });

        const data = [
            {
                id: 1,
                read: false,
                type: 'default',
                value: 'New course available',
            },
            {
                id: 2,
                read: false,
                type: 'urgent',
                value: 'New resume available',
            },
            {
                id: 3,
                read: false,
                type: 'urgent',
                value: 'New data available',
            },
        ];

        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: data,
        };

        const expectedState = initialState.set('notifications', List(data));

        expect(notificationReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = Map({
            notifications: List([
                {
                    id: 1,
                    read: false,
                    type: 'default',
                    value: 'New course available',
                },
                {
                    id: 2,
                    read: false,
                    type: 'urgent',
                    value: 'New resume available',
                },
                {
                    id: 3,
                    read: false,
                    type: 'urgent',
                    value: 'New data available',
                },
            ]),
            filter: 'all',
            loading: false,
        });

        const action = {
            type: MARK_AS_READ,
            index: 1,
        };

        const expectedState = initialState.setIn(['notifications', 1, 'read'], true);

        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const initialState = Map({
            notifications: List(),
            filter: 'all',
            loading: false,
        });

        const action = {
            type: SET_TYPE_FILTER,
            filter: 'urgent',
        };

        const expectedState = initialState.set('filter', 'urgent');

        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_LOADING_STATE', () => {
        const initialState = Map({
            notifications: List(),
            filter: 'all',
            loading: false,
        });

        const action = {
            type: SET_LOADING_STATE,
            isLoading: true,
        };

        const expectedState = initialState.set('loading', true);

        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
});
