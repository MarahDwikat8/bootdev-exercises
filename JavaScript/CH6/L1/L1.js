//Prototypal Inheritance
const notification = {
  notify(recipient, message) {
    return `Notification for ${recipient}: ${message}`;
  },
};

const systemNotification = Object.create(notification);

systemNotification.broadcast = (msg) => {
  console.log(`Broadcast to all users: ${msg}`);
};

// don't touch below this line

export { notification, systemNotification };
