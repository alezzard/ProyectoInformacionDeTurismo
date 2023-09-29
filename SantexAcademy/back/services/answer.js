const { answerProvider } = require("../providers");

const createAnswer = async (body) => {
  const newAnswer = await answerProvider.createAnswer(body);
  return newAnswer;
};

const getAll = async () => {
  const surveysFound = await answerProvider.getAll();
  return surveysFound;
};

const getAnswer = async (answerId) => {
  const surveyFound = await answerProvider.getAnswer(answerId);
  return surveyFound;
};

const deleteAnswer = async (answerId) => {
  const deletedAnswer = await answerProvider.deleteAnswer(answerId);
  return deletedAnswer;
};

module.exports = { createAnswer, getAll, getAnswer, deleteAnswer };
