import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
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


// Dispatch and bounding with redux
const { dispatch } = store;

export const boundLogin = bindActionCreators(login, dispatch);
export const boundLogout = bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, dispatch);
export const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, dispatch);
