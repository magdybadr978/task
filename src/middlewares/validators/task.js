const { z } = require('zod');

const paginationValidator = z.object({
  page: z.string().optional().transform((val) => val ? parseInt(val, 10) : 1),
  limit: z.string().optional().transform((val) => val ? parseInt(val, 10) : 10),
});

const createTaskValidator = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.string().optional().refine((date) => !date || !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  status: z.string().optional(),
  assignedTo: z.string().optional(),
});

const updateTaskValidator = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  dueDate: z.string().optional().refine((date) => !date || !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  status: z.string().optional(),
  assignedTo: z.string().optional(),
});

const getTaskValidator = z.object({
  id: z.string().min(1, 'Task ID is required'),
});

module.exports = {
  paginationValidator,
  createTaskValidator,
  updateTaskValidator,
  getTaskValidator,
};