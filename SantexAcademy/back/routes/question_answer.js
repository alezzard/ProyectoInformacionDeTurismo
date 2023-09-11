const express = require("express");
const router = express.Router();
const { question_answerController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ question_answerController.createQuestion_Answer);
router.get("/", /* jwtValidMDW, */ question_answerController.getAll);
router.get("/:questionId", /* jwtValidMDW, */ question_answerController.getQuestion_Answer);
router.put("/:questionId", /* jwtValidMDW, */ question_answerController.putQuestion_Answer);
router.delete("/:questionId", /* userIsAdminMDW, */ question_answerController.deleteQuestion_Answer);
//router.get("/:answerId", /* jwtValidMDW, */ question_answerController.getSurvey);
//router.put("/:answerId", /* jwtValidMDW, */ question_answerController.putSurvey);
//router.delete("/:answerId", /* userIsAdminMDW, */ question_answerController.deleteSurvey);



module.exports = router;