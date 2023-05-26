import { Map } from 'immutable';
import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const initialState = Map({
    filter: 'DEFAULT',
    notifications: {},
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.mergeIn(['notifications'], action.data.reduce((acc, notification) => {
                acc[notification.id.toString()] = notification;
                return acc;
            }, {}));
        case MARK_AS_READ:
            return state.setIn(['notifications', action.index.toString(), 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
};

export default notificationReducer;
