const express = require("express");
const router = express.Router();
const { surveyController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ surveyController.createSurvey);
router.get("/", /* jwtValidMDW, */ surveyController.getAll);
router.get("/:questionId", /* jwtValidMDW, */ surveyController.getSurvey);
router.put("/:questionId", /* jwtValidMDW, */ surveyController.putSurvey);
router.delete("/:questionId", /* userIsAdminMDW, */ surveyController.deleteSurvey);
router.get("/:answerId", /* jwtValidMDW, */ surveyController.getSurvey);
router.put("/:answerId", /* jwtValidMDW, */ surveyController.putSurvey);
router.delete("/:answerId", /* userIsAdminMDW, */ surveyController.deleteSurvey);



module.exports = router;