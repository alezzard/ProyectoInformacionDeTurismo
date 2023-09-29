const { questionProvider } = require("../providers");

const createQuestion = async (question) => {
  const newQuestion = await questionProvider.createQuestion(question);
  return newQuestion;
};

const getAll = async () => {
  const surveysFound = await questionProvider.getAll();
  return surveysFound;
};

const getQuestion = async (questionId) => {
  const surveyFound = await questionProvider.getQuestion(questionId);
  return surveyFound;
};

const putQuestion = async (questionId, question) => {
  const updatedQuestion = await questionProvider.putQuestion(
    questionId,
    question
  );
  return updatedQuestion;
};

const deleteQuestion = async (questionId) => {
  const deletedQuestion = await questionProvider.deleteQuestion(questionId);
  return deletedQuestion;
};

module.exports = {
  createQuestion,
  getAll,
  getQuestion,
  putQuestion,
  deleteQuestion,
};
