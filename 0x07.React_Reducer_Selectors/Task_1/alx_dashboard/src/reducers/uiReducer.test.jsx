import uiReducer from '../reducers/uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('uiReducer', () => {
    it('should return the initial state', () => {
        expect(uiReducer(undefined, {})).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        });
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const prevState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const nextState = {
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {},
        };
        expect(uiReducer(prevState, action)).toEqual(nextState);
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const prevState = {
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {},
        };
        const nextState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        expect(uiReducer(prevState, action)).toEqual(nextState);
    });

    it('should handle LOGIN_SUCCESS', () => {
        const action = { type: LOGIN_SUCCESS };
        const prevState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const nextState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {},
        };
        expect(uiReducer(prevState, action)).toEqual(nextState);
    });

    it('should handle LOGIN_FAILURE', () => {
        const action = { type: LOGIN_FAILURE };
        const prevState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {},
        };
        const nextState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        expect(uiReducer(prevState, action)).toEqual(nextState);
    });

    it('should handle LOGOUT', () => {
        const action = { type: LOGOUT };
        const prevState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {},
        };
        const nextState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        expect(uiReducer(prevState, action)).toEqual(nextState);
    });

    it('should return the current state for unknown action types', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        const prevState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        expect(uiReducer(prevState, action)).toEqual(prevState);
    });

    it('should return the initial state when the action type is SELECT_COURSE', () => {
        const action = { type: SELECT_COURSE };
        const prevState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        expect(uiReducer(prevState, action)).toEqual(prevState);
    });


});
