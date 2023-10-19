const { Op } = require("sequelize");
const { Answer } = require("../models");
const userProvider = require("../providers/user");
const surveyProvider  = require("../providers/survey");

const createAnswer = async (body) => {
  try {
    //extraigo lo necesario del body
    const {user_id, survey_id, question_id, value} = body;
    
    //creo la respuesta:
    const newAnswer = await Answer.create({question_id, value});


    //relaciono la respuesta con las otras entidades:

    //con el usuario:    
    const userfound = await userProvider.getUser(user_id);
    await userfound.addAnswer(newAnswer);

    //con la encuesta: 
    const surveyFound = await surveyProvider.getSurvey(survey_id);
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

const getAnswer = async (answer_id) => {
  try {
    const answerFound = await Answer.findByPk(answer_id, {
      include: { all: true },
    });
    return answerFound;
  } catch (err) {
    console.log(`Error when fetching Answer ${answer_id}.\n ${err}`);
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
    console.log(`Error when fetching Answer ${answer_id}.\n ${err}`);
    /* console.log("Error when creating Answer.\n",err); */
    throw err;
  }
};


const deleteAnswer = async (answer_id) => {
  try {
    const deletedAnswer = await Answer.destroy({ where: { id: answer_id } });
    return deletedAnswer;
  } catch (err) {
    console.log(`Error when deleting Answer ${answer_id}.\n ${err}`);
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
