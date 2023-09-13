const express = require("express");
const router = express.Router();
const { type_questionController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ type_questionController.createType_Question);
router.get("/", /* jwtValidMDW, */ type_questionController.getAll);
router.get("/:tipe_questionId", /* jwtValidMDW, */ type_questionController.getType_Question);
router.put("/:tipe_questionId", /* jwtValidMDW, */ type_questionController.putType_Question);
router.delete("/:tipe_questionId", /* userIsAdminMDW, */ type_questionController.deleteType_Question);

module.exports = router;