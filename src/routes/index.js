const router = require('express').Router();
const user = require('./user.js');
const task = require('./task.js')


router.use('/user', user);
router.use('/task', task);


module.exports = router;

