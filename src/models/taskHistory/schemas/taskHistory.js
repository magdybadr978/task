const { Schema, Types } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { TaskActions } = require("../../../constans/enums.js");


const taskHistorySchema = new Schema({
  taskId: { type: Types.ObjectId, ref: 'Task' },
  action: { type: String, enum: Object.values(TaskActions)},
  userId: { type: Types.ObjectId, ref: 'User' },
}, { timestamps: true });


module.exports = taskHistorySchema;