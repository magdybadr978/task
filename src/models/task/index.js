const { model } = require('mongoose');
const { TASK } = require('../../constans/models-name');
const taskSchema = require('./schemas/task');


module.exports = model(TASK, taskSchema);
