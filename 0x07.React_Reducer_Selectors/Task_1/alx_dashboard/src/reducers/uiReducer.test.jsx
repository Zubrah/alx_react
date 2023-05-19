import { Map } from 'immutable';
import uiReducer from '../reducers/uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SELECT_COURSE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
    it('should return the initial state when the action type is SELECT_COURSE', () => {
        const action = { type: SELECT_COURSE };
        const prevState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });
        const nextState = uiReducer(prevState, action);
        expect(nextState.toJS()).toEqual(prevState.toJS());
    });

    it('should set isNotificationDrawerVisible to true when the action type is DISPLAY_NOTIFICATION_DRAWER', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const prevState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });
        const expectedState = Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: Map(),
        });
        const nextState = uiReducer(prevState, action);
        expect(nextState.toJS()).toEqual(expectedState.toJS());
    });

    it('should set isNotificationDrawerVisible to false when the action type is HIDE_NOTIFICATION_DRAWER', () => {
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const prevState = Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: Map(),
        });
        const expectedState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });
        const nextState = uiReducer(prevState, action);
        expect(nextState.toJS()).toEqual(expectedState.toJS());
    });

    it('should set isUserLoggedIn to true when the action type is LOGIN_SUCCESS', () => {
        const action = { type: LOGIN_SUCCESS };
        const prevState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });
        const expectedState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map(),
        });
        const nextState = uiReducer(prevState, action);
        expect(nextState.toJS()).toEqual(expectedState.toJS());
    });

    it('should set isUserLoggedIn to false when the action type is LOGIN_FAILURE', () => {
        const action = { type: LOGIN_FAILURE };
        const prevState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map(),
        });
        const expectedState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });
        const nextState = uiReducer(prevState, action);
        expect(nextState.toJS()).toEqual(expectedState.toJS());
    });

    it('should set isUserLoggedIn to false when the action type is LOGOUT', () => {
        const action = { type: LOGOUT };
        const prevState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: Map(),
        });
        const expectedState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: Map(),
        });
        const nextState = uiReducer(prevState, action);
        expect(nextState.toJS()).toEqual(expectedState.toJS());
    });


});
