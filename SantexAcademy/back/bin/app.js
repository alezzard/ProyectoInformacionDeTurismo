const express = require("express");
const cors = require("cors");

const loggingMiddleware = require("../middleware/logging");
const { initializeDB } = require("../config/db-config");
const {
  roleRouter,
  userRouter,
  authRouter,
  surveyRouter,
  answerRouter,
  questionRouter,
} = require("../routes");
require('../models/asociations')


const PORT = 3000;

const app = express();

// Application middlewares
app.use(express.json()); // parsea a json
app.use(loggingMiddleware);
app.use(cors());

// Rutas
app.use("/user", userRouter);
app.use("/role", roleRouter);
app.use("/survey", surveyRouter);
app.use("/login", authRouter);
app.use("/question", questionRouter);
app.use("/answer", answerRouter);


// Arrancamos el servidor
app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in port ${PORT}`);
});
