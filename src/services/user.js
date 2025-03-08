const Task = require("../models/task");
const TaskHistory = require("../models/taskHistory");
const TaskComment = require("../models/taskComment");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../models/user/methods/generate-token.js");

const signup = async ({ name, email, password, role }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });
  const token = generateToken(user._id, user.role);

  return {
    success: true,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    },
  };
};

const getUserTasks = async (userId, status, dueDate, page = 1, limit = 10) => {
  const query = { assignedTo: userId };
  if (status) query.status = status;
  if (dueDate) query.dueDate = { $lte: new Date(dueDate) };

  return Task.paginate(query, {
    page,
    limit,
    populate: ["createdBy", "assignedTo"],
  });
};

const getTaskHistory = async (taskId) => {
  return TaskHistory.find({ taskId }).populate("userId", "name email");
};

const getTaskInteractions = async (taskId) => {
  const comments = await TaskComment.find({ taskId }).distinct("userId");
  const history = await TaskHistory.find({ taskId }).distinct("userId");
  const userIds = [...new Set([...comments, ...history])];

  return User.find({ _id: { $in: userIds } }, "name email");
};

module.exports = { signup, getUserTasks, getTaskHistory, getTaskInteractions };
