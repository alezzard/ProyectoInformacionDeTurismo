const { Op } = require("sequelize");
const { Answer } = require("../models");
const questionProvider = require("../providers/question");
const userProvider = require("../providers/user");
const surveyProvider  = require("../providers/survey");

const createAnswer = async (body) => {
  try {
    //extraigo lo necesario del body
    const {userId, surveyId, questionId, answer} = body;
    
    console.log(`userId: ${userId}, 
                surveyId: ${surveyId}, 
                questionId: ${questionId}, 
                answer: ${answer}.`)
    //creo la respuesta:
    const newAnswer = await Answer.create({questionId, answer});


    //relaciono la respuesta con las otras entidades:

    //con el usuario:    
    const userfound = await userProvider.getUser(userId);
    await userfound.addAnswer(newAnswer);

    //con la encuesta: 
    const surveyFound = await surveyProvider.getSurvey(surveyId);
    await surveyFound.addAnswer(newAnswer);

    return newAnswer;
  } catch (err) {
    throw err;
  }
};

const getAll = async () => {
  try {
    /*const answersFound = await Answer.findAll(); */
    const answersFound = await Answer.findAll({ include: { all: true } });
    return answersFound;
  } catch (err) {
    console.log(`Error when fetching Answers.\n ${err}`);
    throw err;
  }
};

const getAnswer = async (answerId) => {
  try {
    const answerFound = await Answer.findByPk(answerId, {
      include: { all: true },
    });
    return answerFound;
  } catch (err) {
    console.log(`Error when fetching Answer ${answerId}.\n ${err}`);
    throw err;
  }
};

const getAnswerByCriteria = async (options) => {
  try {
    const userFound = await Answer.findAll({
      where: {
        [Op.or]: [
          { firstName: options.firstName },
          { lastName: options.lastName },
        ],
      },
    });
    return userFound;
  } catch (err) {
    console.log(`Error when fetching Answer ${answerId}.\n ${err}`);
    /* console.log("Error when creating Answer.\n",err); */
    throw err;
  }
};


const deleteAnswer = async (answerId) => {
  try {
    const deletedAnswer = await Answer.destroy({ where: { id: answerId } });
    return deletedAnswer;
  } catch (err) {
    console.log(`Error when deleting Answer ${answerId}.\n ${err}`);
    throw err;
  }
};

module.exports = {
  createAnswer,
  getAll,
  getAnswer,
  getAnswerByCriteria,
  deleteAnswer,
};
