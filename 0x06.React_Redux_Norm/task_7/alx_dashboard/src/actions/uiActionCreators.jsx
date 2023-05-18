import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './uiActionTypes';
import { bindActionCreators } from 'redux';

export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password },
});

export const logout = () => ({
    type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});


//Logins
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});


// Dispatch and bounding with redux
const { dispatch } = store;

export const boundLogin = bindActionCreators(login, dispatch);
export const boundLogout = bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, dispatch);
export const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, dispatch);


//Logins exports
export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password));
        try {
            const response = await fetch('../../dist/login-success.json');
            if (response.ok) {
                dispatch(loginSuccess());
            } else {
                dispatch(loginFailure());
            }
        } catch (error) {
            dispatch(loginFailure());
        }
    };
};