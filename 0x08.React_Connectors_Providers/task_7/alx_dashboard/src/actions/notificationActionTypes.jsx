

export const MARK_AS_READ = 'MARK_AS_READ';
export const SET_TYPE_FILTER = 'SET_TYPE_FILTER';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';


export const NotificationTypeFilters = {
    DEFAULT: 'DEFAULT',
    URGENT: 'URGENT',
};


export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index,
});