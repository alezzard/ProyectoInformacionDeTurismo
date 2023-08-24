const express = require("express");
const router = express.Router();
const { roleController } = require("../controllers")


router.post("/", roleController.createRole);
router.get("/:roleId", roleController.getRole);
router.put("/:roleId", roleController.putRole); 
 router.delete("/:roleId", /* userIsAdminMDW, */ roleController.deleteRole); 



module.exports = router;