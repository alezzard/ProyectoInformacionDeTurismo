/* const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const app = Express();

// Rutas

// use=
app.use('/ping', (req, res) => {
  res.json({
    response: 'pong!',
  });
});
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app; */

const roleRouter = require("./role");
const userRouter = require("./user");
const surveyRouter = require("./survey");
const authRouter = require("./auth");
const question_answerRouter = require("./question_answer");

module.exports = { roleRouter, userRouter, authRouter, surveyRouter, question_answerRouter, };
