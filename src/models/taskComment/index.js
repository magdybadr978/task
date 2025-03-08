const { model } = require('mongoose');
const { TASK_COMMENT } = require('../../constans/models-name');
const taskCommentSchema = require('./schemas/taskComment.js');

module.exports = model(TASK_COMMENT, taskCommentSchema);
