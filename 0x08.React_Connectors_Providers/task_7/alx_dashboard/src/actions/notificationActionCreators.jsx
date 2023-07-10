import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE, SET_NOTIFICATIONS } from './notificationActionTypes';
import { bindActionCreators } from 'redux';


export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index,
});

export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter,
});

export const fetchNotificationsSuccess = (data) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
});

export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    isLoading,
});

export const setNotifications = (notifications) => ({
    type: SET_NOTIFICATIONS,
    data: notifications,
});

export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));

        fetch('../../dist/notifications.json')
            .then((response) => response.json())
            .then((data) => {
                const notificationsArray = Array.from(data);
                dispatch(setNotifications(notificationsArray));
                dispatch(setLoadingState(false));
            })
            .catch((error) => {
                console.error('Error fetching notifications:', error);
                dispatch(setLoadingState(false));
            });
    };
};

//export const boundMarkAsRead = bindActionCreators(markAsRead);
export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter);
