import { fromJS, Map } from 'immutable';
import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS,
    SET_NOTIFICATIONS,
    SET_LOADING_STATE,
    //DISPLAY_NOTIFICATION_DRAWER,
    //HIDE_NOTIFICATION_DRAWER,
} from '../actions/notificationActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

const initialState = fromJS({
    notifications: Map(),
    filter: 'all',
    loading: false,
    isDrawerVisible: false,
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_AS_READ:
            return {
                ...state,
                notifications: {
                    ...state.notifications,
                    [action.index]: {
                        ...state.notifications[action.index],
                        read: true,
                    },
                },
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

        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isDrawerVisible: true,
            };

        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.notifications,
            };

        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isDrawerVisible: false,
            };

        default:
            return state;
    }
};

export default notificationReducer;
