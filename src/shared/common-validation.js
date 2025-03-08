const { isValidObjectId } = require('mongoose');
const Joi = require('joi');

const objectIdValidator = (value, helpers) => {
    if (!isValidObjectId(value)) return helpers.message('Invalid ObjectId format');
    return value;
};

const paginationValidator = Joi.object({
    page: Joi.number().min(0),
    limit: Joi.number().min(0).max(100)
}).unknown(true)



module.exports = {
    objectIdValidator,
    paginationValidator
}