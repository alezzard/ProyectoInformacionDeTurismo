const express = require("express");
const router = express.Router();
const { answerController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ answerController.createAnswer);
router.get("/", /* jwtValidMDW, */ answerController.getAll);
router.get("/:answerId", /* jwtValidMDW, */ answerController.getAll);
router.delete("/:answerId", /* userIsAdminMDW, */ answerController.deleteAnswer);



module.exports = router;