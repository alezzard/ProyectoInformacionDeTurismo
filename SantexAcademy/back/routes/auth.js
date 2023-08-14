const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { userService } = require("../services");

const { SECRET_SERVER } = require("../middleware/auth");
const { Model } = require("sequelize");

router.post("/login", async ( req, res ) => {
    const { user, pass } = req.body;
    if ( user === "admin" && pass === "admin"){
        const token = jwt.sing({ user, role: "Admin"}, SECRET_SERVER, {});
        res.json({ token });
    } else {
        const userFound = await userService.validateUser( user, pass );
        if (userFound) {
            const token = jwt.sing({ user, role: "Admin"}, SECRET_SERVER, {
                expiresIN: "2h",
            });
            return res.json({ token });
        }
        res.status(401).json({ error: "Invalid User"});
    }
});

module.exports = router;