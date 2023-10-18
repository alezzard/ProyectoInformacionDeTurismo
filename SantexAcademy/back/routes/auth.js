const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { userService } = require("../services");

const { SERVER_SECRET } = require("../middleware/auth");

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(404).json({ error: "Invalid credentials" });
    }
    try {
        const userFound = await userService.validateUser(email, password);
        if (userFound) {

            const role_id = userFound[0].get('role_id');
            console.log(`Routes: email: ${email}, password: ${password} \n role_id: ${role_id}`);

            if (role_id == 1) {
                const token = jwt.sign({ email, role: "Admin" }, SERVER_SECRET, {
                    expiresIn: "40m",
                });
                res.json({ token, "authorities": "Admin" });
            
            } else if (role_id == 2) { 
                const token = jwt.sign({ email, role: "User" }, SERVER_SECRET, {
                    expiresIn: "40m",
                });
                return res.json({ token, "authorities": "User" });
            }

        } else {
            return res.status(404).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        console.log(`Error: ${err}`);
        res.status(401).json({ error: "Invalid User" });
    }





});

module.exports = router;