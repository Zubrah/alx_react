import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginRequest,

} from './uiActionCreators';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should create an action to login', () => {
        const expectedAction = { type: LOGIN };
        expect(login()).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = { type: LOGOUT };
        expect(logout()).toEqual(expectedAction);
    });

    it('should create an action to display notification drawer', () => {
        const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
    });

    it('should create an action to hide notification drawer', () => {
        const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
    });

    it('should dispatch login and loginSuccess actions on successful API response', () => {
        const store = mockStore({});
        const expectedActions = [
            { type: LOGIN },
            { type: LOGIN_SUCCESS },
        ];

        fetchMock.getOnce('../../dist/login-success.json', { body: { success: true } });

        return store.dispatch(loginRequest('johann.salva@alxstudent.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should dispatch login and loginFailure actions on failed API response', () => {
        const store = mockStore({});
        const expectedActions = [
            { type: LOGIN },
            { type: LOGIN_FAILURE },
        ];

        fetchMock.getOnce('../../dist/login-success.json', { status: 500 });

        return store.dispatch(loginRequest('johann.salva@alxstudent.com', 'password')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
