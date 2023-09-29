const { Op } = require("sequelize");
const { Question } = require("../models");

const createQuestion = async (question) => {
  try {
    const newQuestion = await Question.create(question);
    return newQuestion;
  } catch (err) {
    throw err;
  }
};

const getAll = async () => {
  try {
    /*const questionsFound = await Question.findAll(); */
    const questionsFound = await Question.findAll({
      include: { all: true },
    });
    return questionsFound;
  } catch (err) {
    console.log(`Error when fetching Questions.\n ${err}`);
    throw err;
  }
};

const getQuestion = async (questionId) => {
  try {
    const questionFound = await Question.findByPk(
      questionId,
      { include: { all: true } }
    );
    return questionFound;
  } catch (err) {
    console.log(
      `Error when fetching Question ${questionId}.\n ${err}`
    );
    throw err;
  }
};

const getQuestionByCriteria = async (options) => {
  try {
    const userFound = await Question.findAll({
      where: {
        [Op.or]: [
          { firstName: options.firstName },
          { lastName: options.lastName },
        ],
      },
    });
    return userFound;
  } catch (err) {
    console.log(
      `Error when fetching Question ${questionId}.\n ${err}`
    );
    /* console.log("Error when creating Question.\n",err); */
    throw err;
  }
};

const putQuestion = async (questionId, question) => {
  try {
    await getQuestion(questionId);
    const updatedQuestion = await Question.update(
      { ...question },
      { where: { id: questionId } }
    );
    return updatedQuestion;
  } catch (err) {
    console.log(
      `Error when updating Question ${questionId}.\n ${err}`
    );
    throw err;
  }
};

const deleteQuestion = async (questionId) => {
  try {
    const deletedQuestion = await Question.destroy({
      where: { id: questionId },
    });
    return deletedQuestion;
  } catch (err) {
    console.log(
      `Error when deleting Question ${questionId}.\n ${err}`
    );
    throw err;
  }
};

module.exports = {
  createQuestion,
  getAll,
  getQuestion,
  getQuestionByCriteria,
  putQuestion,
  deleteQuestion,
};
