const Notification = require("../models/notification");

const getAll = async (userId, pagination) => {
  const query = { userId };
  return Notification.paginate(query, { ...pagination, sort: { _id: -1 } });
};

module.exports = {
  getAll
}