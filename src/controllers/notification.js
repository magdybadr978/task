const notificationService = require("../services/notification");
const asyncHandler = require("../utils/async-handler");
const { OK } = require("../constans/status-codes");

const getAll = asyncHandler(async (req, res) => {
  const { userId } = req;
  const { page = 1, limit = 15 } = req.query;

  const notifications = await notificationService.getAll(userId, { page, limit });
  return res.status(OK).json(notifications);
});

module.exports = {
  getAll,
};
