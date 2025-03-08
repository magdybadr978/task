const router = require('express').Router();
const userTaskController = require('../controllers/user.js');
const auth = require('../middlewares/auth');
const { Roles } = require('../constans/enums.js');
const validationMiddleware = require('../middlewares/validator');
const { getTaskValidator, getUserTasksValidator, paginationValidator } = require('../middlewares/validators/user.js');


router.post('/signup', userTaskController.signup);


router.get(
  '/:userId/tasks',
  auth([Roles.admin, Roles.manager, Roles.user]),
  validationMiddleware(getUserTasksValidator, 'query'),
  userTaskController.getUserTasks
);

router.get(
  '/:taskId/history',
  auth([Roles.admin, Roles.manager , Roles.user]),
  validationMiddleware(getTaskValidator),
  userTaskController.getTaskHistory
);

router.get(
  '/:taskId/interactions',
  auth([Roles.admin, Roles.manager , Roles.user]),
  validationMiddleware(getTaskValidator),
  userTaskController.getTaskInteractions
);

module.exports = router;
