const express = require("express");
const router = express.Router();
const { roleController } = require("../controllers")


router.post("/", roleController.createRole);
/*router.get("/:userId", roleController.getRole);
router.put("/:userId", roleController.putRole); */
/* router.delete("/:userId", roleController.deleteRole); */



module.exports = router;