const { Schema, Types } = require("mongoose");
const { Roles } = require("../../../constans/enums.js");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: { type: String },
    password: { type: String },
    role: { type: String, enum: Object.values(Roles), default: Roles.user },
  },
  { timestamps: true }
);

userSchema.plugin(mongoosePaginate);

module.exports = userSchema;
