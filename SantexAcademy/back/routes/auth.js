const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { userService } = require("../services");

const { SERVER_SECRET } = require("../middleware/auth");

router.post("/", async ( req, res ) => {
    const { email, password } = req.body;
    if ( email === "admin@email.com" && password === "admin1234"){
        const token = jwt.sign({ email, role: "Admin"}, SERVER_SECRET, {
            expiresIn: "40m",
        });
        res.json({ token });
    } else {
        const userFound = await userService.validateUser( email, password );
        if (userFound) {
            const token = jwt.sing({ email, role: "User"}, SERVER_SECRET, {
                expiresIN: "20m",
            });
            return res.json({ token });
        }
        res.status(401).json({ error: "Invalid User"});
    }
});

module.exports = router;