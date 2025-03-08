const router = require("express").Router();
const { roles } = require("../constans/role-enum");
const notificationController = require("../controllers/notification");
const auth = require("../middlewares/auth");

router.get(
    "/",
    auth(Object.values(roles)),
    notificationController.getAll
);

module.exports = router;
