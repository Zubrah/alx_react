import { createSelector } from 'reselect';

const getNotificationState = (state) => state && state.notifications;

export const filterTypeSelected = createSelector(
    getNotificationState,
    (notificationState) => notificationState && notificationState.get('filter')
);

export const getNotifications = createSelector(
    getNotificationState,
    (notificationState) => notificationState && notificationState.get('notifications')
);

export const getUnreadNotifications = createSelector(
    getNotifications,
    (notifications) => notifications && notifications.filter((notification) => !notification.get('isRead'))
);
