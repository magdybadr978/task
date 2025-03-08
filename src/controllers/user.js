const { OK ,CREATED , BAD_REQUEST} = require('../constans/status-codes.js');
const userTaskService = require('../services/user.js');
const asyncHandler = require('../utils/async-handler.js');


const signup = asyncHandler(async (req, res) => {
  const result = await userTaskService.signup(req.body);
  if (!result.success) {
    return res.status(BAD_REQUEST).json({ message: result.message });
  }
  res.status(CREATED).json(result.data);
});


const getUserTasks = asyncHandler (async (req, res) => {
  const { userId } = req.params;
  const { status, dueDate, page, limit } = req.query;
  const tasks = await userTaskService.getUserTasks(userId, status, dueDate, page, limit);
  res.status(OK).json(tasks);
});

const getTaskHistory = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const history = await userTaskService.getTaskHistory(taskId);
  res.status(OK).json(history);
});


const getTaskInteractions = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const users = await userTaskService.getTaskInteractions(taskId);
  res.status(OK).json(users);
});

module.exports = { signup ,getUserTasks, getTaskHistory, getTaskInteractions };