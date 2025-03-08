const { model } = require('mongoose');
const { USER } = require('../../constans/models-name');
const userSchema = require('./schemas/user');

require('./methods')(userSchema);

module.exports = model(USER, userSchema);
