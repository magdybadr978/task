const { model } = require("mongoose")
const { NOTIFICATION } = require("../../constans/models-name")
const notificationSchema = require("./schemas/notification")



module.exports = model(NOTIFICATION, notificationSchema)
