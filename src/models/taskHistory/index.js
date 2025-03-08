const { model } = require('mongoose');
const { TASK_HISTORY } = require('../../constans/models-name');
const taskHistorySchema = require('./schemas/taskHistory.js');


module.exports = model(TASK_HISTORY, taskHistorySchema);
