const { Schema, Types } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const taskCommentSchema = new Schema(
  {
    taskId: { type: Types.ObjectId, ref: "Task", required: true },
    userId: { type: Types.ObjectId, ref: "User", required: true },
    comment: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

taskCommentSchema.plugin(mongoosePaginate);

module.exports = taskCommentSchema;
