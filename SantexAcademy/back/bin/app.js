const express = require('express');
const cors = require('cors');

const { roleRouter, userRouter, authRouter,  surveyRouter } = require('../routes');
const loggingMiddleware = require('../middleware/logging');
const { initializeDB } = require('../config/db-config');

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

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in port ${PORT}`);
});
