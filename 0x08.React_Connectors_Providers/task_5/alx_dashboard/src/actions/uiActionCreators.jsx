import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './uiActionTypes';

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

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

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

export const boundLoginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest(email, password));
    };
};

export const boundLoginSuccess = () => {
    return (dispatch) => {
        dispatch(loginSuccess());
    };
};

export const boundLoginFailure = () => {
    return (dispatch) => {
        dispatch(loginFailure());
    };
};

export const boundDisplayNotificationDrawer = () => {
    return (dispatch) => {
        dispatch(displayNotificationDrawer());
    };
};

export const boundHideNotificationDrawer = () => {
    return (dispatch) => {
        dispatch(hideNotificationDrawer());
    };
};

export const boundLogin = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));
    };
};

export const boundLogout = () => {
    return (dispatch) => {
        dispatch(logout());
    };
};
