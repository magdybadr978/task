const Notification = require("../models/notification");
const serviceAccount = require('../../a2y1-a9142-firebase-adminsdk-fbsvc-815401f1cb.json');
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendFcmNotification = async (tokens, notification, dataPayload) => {
  const message = {
    tokens,
    notification,
    data: dataPayload,
  };

  const response = await admin.messaging().sendEachForMulticast(message)
  return response;
}

const sendNotification = async (userId, tokens, title, message, data = {}) => {
  const notification = {
    title,
    body: message,
  };

  const newNotification = new Notification({
    userId,
    title,
    message
  });
  await newNotification.save();

  const fcmResponse = await sendFcmNotification(tokens, notification, data);
  await newNotification.updateOne({ status: true });

  return { success: true, messageId: fcmResponse };
}

module.exports = {
  sendNotification,
};
