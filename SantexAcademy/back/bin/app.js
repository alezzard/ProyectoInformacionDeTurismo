const express = require('express');

const { roleRouter, userRouter, authRouter } = require('../routes');
const loggingMiddleware = require("../middleware/logging");
const { initializeDB } = require("../config/db-config");

const PORT = 3000;

const app = express();

//Application middlewares
app.use(express.json());//parsea a json


app.use(loggingMiddleware);

app.get("/user", (req, res) => {
    console.log("User: ",req.user)
    res.send(`<h1>Hello World in port ${PORT}</h1>`)
});

app.use("/user", userRouter);
app.use("/role", roleRouter);
app.use("/login", authRouter);




app.listen(PORT, async() => {
    await initializeDB();
    console.log(`Server running in port ${PORT}`);
});