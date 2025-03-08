const asyncHandler = require('../utils/async-handler');
const { OK, CREATED, NOT_FOUND } = require('../constans/status-codes.js');
const taskService = require('../services/task');
const { CustomError } = require('../utils/custom-error');

const createTask = asyncHandler(async (req, res) => {
  const task = await taskService.create(req.body);
  res.status(CREATED).json({ message: 'Task created successfully', task });
});

const updateTask = asyncHandler(async (req, res) => {
  const updatedTask = await taskService.update(req.params.id, req.body);
  res.status(OK).json({ message: 'Task updated successfully', updatedTask });
});

const getTask = asyncHandler(async (req, res) => {
  const task = await taskService.getOneByQuery({ _id: req.params.id });
  if (!task) throw new CustomError("Task not found", NOT_FOUND);
  res.status(OK).json({ task });
});

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getAll();
  res.status(OK).json(tasks);
});

module.exports = { createTask, updateTask, getTask, getAllTasks };
