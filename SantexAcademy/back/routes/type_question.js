const express = require("express");
const router = express.Router();
const { type_questionController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ type_questionController.createTipe_Question);
router.get("/", /* jwtValidMDW, */ type_questionController.getAll);
router.get("/:questionId", /* jwtValidMDW, */ type_questionController.getTipe_Question);
router.put("/:questionId", /* jwtValidMDW, */ type_questionController.putTipe_Question);
router.delete("/:questionId", /* userIsAdminMDW, */ type_questionController.deleteTipe_Question);

module.exports = router;