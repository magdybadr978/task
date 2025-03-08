const router = require('express').Router();
const taskController = require('../controllers/task');
const taskValidators = require('../middlewares/validators/task');
const validationMiddleware = require('../middlewares/validator');
const auth = require('../middlewares/auth');
const { Roles } = require('../constans/enums.js');

router.post(
  '/',
  auth([Roles.admin, Roles.manager , Roles.user]),
  validationMiddleware(taskValidators.createTaskValidator, 'body'),
  taskController.createTask
);

router.put(
  '/:id',
  auth([Roles.admin, Roles.manager]),
  validationMiddleware(taskValidators.updateTaskValidator, 'body'),
  taskController.updateTask
);

router.get(
  '/:id',
  auth([Roles.admin, Roles.manager , Roles.user]),
  validationMiddleware(taskValidators.getTaskValidator, 'params'),
  taskController.getTask
);

router.get(
  '/',
  auth([Roles.admin]),
  validationMiddleware(taskValidators.paginationValidator, 'query'),
  taskController.getAllTasks
);

module.exports = router;
