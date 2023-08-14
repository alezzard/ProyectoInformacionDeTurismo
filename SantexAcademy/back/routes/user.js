const express = require("express");
const router = express.Router();
const { userController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ userController.createUser);
router.get("/:userId", /* jwtValidMDW, */ userController.getUser);
router.put("/:userId", /* jwtValidMDW, */ userController.putUser);
router.put("/setRole/:userId", /* jwtValidMDW, */ userController.putUser);
router.delete("/:userId", /* userIsAdminMDW, */ userController.deleteUser);



module.exports = router;