// Import the JSON data from notifications.json
import * as notificationsData from "../notifications.json";

// Define a function named getAllNotificationsByUser that accepts userId as an argument
export function getAllNotificationsByUser(userId) {
  // Use filter method to filter the notifications data by author id and then use the map method to extract the context objects from the filtered notifications data
  return notificationsData.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
