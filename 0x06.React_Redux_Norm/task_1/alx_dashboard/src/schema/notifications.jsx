import { normalize, schema } from 'normalizr';
import notificationsData from '../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages');
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const notificationsSchema = [notification];

const normalizedData = normalize(notificationsData, notificationsSchema);

export default normalizedData;
