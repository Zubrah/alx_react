import { normalize, schema } from 'normalizr';
import notificationsData from '../../dist/notifications.json';
import { courseSchema } from './courses';

const user = new schema.Entity('users');
const message = new schema.Entity('messages');
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const notificationsSchema = [notification];

const normalizedData = normalize(notificationsData, notificationsSchema);

export default normalizedData;


// Get All NotificationsByUserID's
export function getAllNotificationsByUser(userId) {
  const userNotifications = normalizedData.entities.users[userId]?.notifications || [];
  return userNotifications.map((notificationId) => normalizedData.entities.notifications[notificationId]);
}

// -----------------------------Notification ----------------------------------
// Notifications Schema 
export const notificationSchema = new schema.Entity('notifications', {
  course: courseSchema,
});

// Notifications Normalizer
export const notificationsNormalizer = (data) => {
  const normalizedData = schema.normalize(data, [notification]);
  return normalizedData.entities;

}

