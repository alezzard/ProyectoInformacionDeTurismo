const express = require('express');
const cors = require('cors');

const { roleRouter, userRouter, authRouter,  surveyRouter, question_answerRouter } = require('../routes');
const loggingMiddleware = require('../middleware/logging');
const { initializeDB } = require('../config/db-config');
const { Question_Answer } = require('../models');

const PORT = 3000;

const app = express();

// Application middlewares
app.use(express.json());// parsea a json

app.use(loggingMiddleware);

app.use(cors());

app.use('/user', userRouter);
app.use('/role', roleRouter);
app.use('/survey', surveyRouter);
app.use('/login', authRouter);
app.use('/question', question_answerRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in port ${PORT}`);
});
