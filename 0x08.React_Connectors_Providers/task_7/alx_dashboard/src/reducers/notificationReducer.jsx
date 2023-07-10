import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { Map } from 'immutable';

const initialState = {
    filter: 'DEFAULT',
    notifications: [],
    loading: false,
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((notification) => {
                    if (notification.id === action.index) {
                        return {
                            ...notification,
                            isRead: true,
                        };
                    }
                    return notification;
                }),
            };
        case SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter,
            };
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data,
            };
        case SET_LOADING_STATE:
            return {
                ...state,
                loading: action.isLoading,
            };
        default:
            return state;
    }
};

export default notificationReducer;
