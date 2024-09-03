const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
router.route("").get(userController.getAll);
router.route("/:id?").get(userController.getById);
router.route("").post(userController.create);
router.route("/:id?").put(userController.updateById);
router.route("/:id?").delete(userController.deleteById);

module.exports = router;