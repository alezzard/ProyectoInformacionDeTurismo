const express = require("express");
const router = express.Router();
const { surveyController } = require("../controllers")
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth");

router.post("/", /* userIsAdminMDW, */ surveyController.createSurvey);
router.get("/", /* jwtValidMDW, */ surveyController.getAll);
router.get("/:surveyId", /* jwtValidMDW, */ surveyController.getSurvey);
router.put("/:surveyId", /* jwtValidMDW, */ surveyController.putSurvey);
router.delete("/:surveyId", /* userIsAdminMDW, */ surveyController.deleteSurvey);



module.exports = router;