const express = require("express");
const router = express.Router();
const { questionController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ questionController.createQuestion);
router.get("/", /* jwtValidMDW, */ questionController.getAll);
router.get("/:questionId", /* jwtValidMDW, */ questionController.getQuestion);
router.put("/:questionId", /* jwtValidMDW, */ questionController.putQuestion);
router.delete("/:questionId", /* userIsAdminMDW, */ questionController.deleteQuestion);




module.exports = router;