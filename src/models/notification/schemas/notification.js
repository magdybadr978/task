const mongoose = require('mongoose');
const { USER } = require('../../../constans/models-name');
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');
const { Schema } = mongoose;

const notificationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: USER,
    required: true
  },
  title: String,
  message: String,
  status: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

notificationSchema.plugin(mongoosePaginate);
notificationSchema.plugin(mongooseAggregatePaginate);

module.exports = notificationSchema;
