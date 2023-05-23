import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
} from './uiActionCreators';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './uiActionTypes';

describe('uiActionCreators', () => {
    describe('login', () => {
        it('should create a login action with email and password', () => {
            const email = 'johann.salva@alxstudent.com';
            const password = 'password';
            const expectedAction = {
                type: LOGIN,
                user: { email, password },
            };
            expect(login(email, password)).toEqual(expectedAction);
        });
    });

    describe('logout', () => {
        it('should create a logout action', () => {
            const expectedAction = {
                type: LOGOUT,
            };
            expect(logout()).toEqual(expectedAction);
        });
    });

    describe('displayNotificationDrawer', () => {
        it('should create a displayNotificationDrawer action', () => {
            const expectedAction = {
                type: DISPLAY_NOTIFICATION_DRAWER,
            };
            expect(displayNotificationDrawer()).toEqual(expectedAction);
        });
    });

    describe('hideNotificationDrawer', () => {
        it('should create a hideNotificationDrawer action', () => {
            const expectedAction = {
                type: HIDE_NOTIFICATION_DRAWER,
            };
            expect(hideNotificationDrawer()).toEqual(expectedAction);
        });
    });

    describe('loginSuccess', () => {
        it('should create a loginSuccess action', () => {
            const expectedAction = {
                type: LOGIN_SUCCESS,
            };
            expect(loginSuccess()).toEqual(expectedAction);
        });
    });

    describe('loginFailure', () => {
        it('should create a loginFailure action', () => {
            const expectedAction = {
                type: LOGIN_FAILURE,
            };
            expect(loginFailure()).toEqual(expectedAction);
        });
    });
});
