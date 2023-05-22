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
//const { dispatch } = store;

export const boundLogin = login;
export const boundLogout = logout;
export const boundDisplayNotificationDrawer = displayNotificationDrawer;
export const boundHideNotificationDrawer = hideNotificationDrawer;


//Logins exports
export const loginRequest = (email, password) => {
    return async () => {
        //dispatch(login(email, password));
        login(email, password);
        try {
            const response = await fetch('../../dist/login-success.json');
            if (response.ok) {
                // dispatch(loginSuccess());
                loginSuccess();
            } else {
                // dispatch(loginFailure());
                loginFailure();
            }
        } catch (error) {
            // dispatch(loginFailure());
            loginFailure();
        }
    };
};