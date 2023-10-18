const { Op, Sequelize } = require("sequelize");
const { Question, Answer } = require("../models");

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
    // Buscar respuestas agrupadas por valor para la pregunta específica
    const aggregatedAnswers = await Answer.findAll({
        attributes: [
            'value',
            [Sequelize.fn('count', Sequelize.col('value')), 'countValue']
        ],
        where: { question_id: questionId }, // Cambio de 'QuestionId' a 'question_id'
        group: ['value'], // agrupa por el valor de la respuesta
        order: [Sequelize.literal('countValue DESC')]
    });

    // Transformar la respuesta para que se ajuste al formato deseado
    const formattedResponse = {};

    formattedResponse[`pregunta_id_${questionId}`] = {
        total_respuestas: aggregatedAnswers.reduce((acc, answer) => acc + answer.get('countValue'), 0),
        respuestas: aggregatedAnswers.map(answer => {
            return {
                value: answer.value,
                respuestas: answer.get('countValue')
            };
        })
    };

    return formattedResponse;
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
