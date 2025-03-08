const { Schema, Types } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { taskStatus } = require("../../../constans/enums.js");

const taskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    status: {
      type: String,
      enum: Object.values(taskStatus),
      default: taskStatus.pending,
    },
    dueDate: { type: Date },
    assignedTo: { type: Types.ObjectId, ref: "User" },
    createdBy: { type: Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

taskSchema.index({ assignedTo: 1, dueDate: 1 });
taskSchema.plugin(mongoosePaginate);


module.exports = taskSchema;
