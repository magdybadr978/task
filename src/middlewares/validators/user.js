const { z } = require('zod');
const { body, param } = require('express-validator');

const paginationValidator = z.object({
  page: z.string().optional().transform((val) => val ? parseInt(val, 10) : 1),
  limit: z.string().optional().transform((val) => val ? parseInt(val, 10) : 10),
});

const getUserTasksValidator = z.object({
  userId: z.string().min(1, 'User ID is required'),
  status: z.string().optional(),
  dueDate: z.string().optional().refine((date) => !date || !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  ...paginationValidator.shape,
});


const getTaskValidator = [
  param('taskId').isMongoId().withMessage('Invalid task ID format'),
];


module.exports = {
  paginationValidator,
  getUserTasksValidator,
  getTaskValidator
};