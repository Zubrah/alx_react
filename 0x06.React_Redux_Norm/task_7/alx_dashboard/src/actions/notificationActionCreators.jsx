import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';



export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index,
});

export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter,
});


// Dispatch and bounding with redux
const { dispatch } = store;

export const boundMarkAsRead = bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, dispatch);