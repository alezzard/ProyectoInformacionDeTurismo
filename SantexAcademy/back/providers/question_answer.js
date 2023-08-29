const { Op } = require("sequelize");
const { Question_Answer } = require("../models");

const createQuestion_Answer = async (question_answer) => {
    try {
        const newQuestion_Answer = await Question_Answer.create(question_answer);
        return newQuestion_Answer;
    } catch (err) {
        
        throw err;
    }
};

const getAll = async () => {
    try {
        const question_answersFound = await Question_Answer.findAll();
        /* const question_answersFound = await Question_Answer.findAll({include: { all:true}});   */      
        return question_answersFound;
    } catch (err) {
        console.log(`Error when fetching Question_Answers.\n ${err}`);
        throw err;
    }
};

const getQuestion_Answer = async (question_answerId) => {
    try {
        const question_answerFound = await Question_Answer.findByPk(question_answerId, { include: { all: true } });
        return question_answerFound;
    } catch (err) {
        console.log(`Error when fetching Question_Answer ${question_answerId}.\n ${err}`);
        throw err;
    }
};

const getQuestion_AnswerByCriteria = async (options) => {
    try {
        const userFound = await Question_Answer.findAll({
            where: {
                [Op.or]: [
                    { firstName: options.firstName },
                    { lastName: options.lastName }
                ]
            }
        });
        return userFound;
    } catch (err) {
        console.log(`Error when fetching Question_Answer ${question_answerId}.\n ${err}`);
        /* console.log("Error when creating Question_Answer.\n",err); */
        throw err;
    }
};


const putQuestion_Answer = async (question_answerId, question_answer) => {
    try {
        await getQuestion_Answer(question_answerId);
        const updatedQuestion_Answer = await Question_Answer.update(
            { ...question_answer }, 
            { where:{id:question_answerId} },); 
        return updatedQuestion_Answer;  
    } catch (err) {
        console.log(`Error when updating Question_Answer ${question_answerId}.\n ${err}`);
        throw err;
    }
};


const deleteQuestion_Answer = async (question_answerId) => {
    try {
        const deletedQuestion_Answer = await Question_Answer.destroy(
            {where: {id:question_answerId}}
        );
        return deletedQuestion_Answer;
    } catch (err) {
        console.log(`Error when deleting Question_Answer ${question_answerId}.\n ${err}`);
        throw err;
    }
};


module.exports = { createQuestion_Answer, getAll, getQuestion_Answer, getQuestion_AnswerByCriteria, putQuestion_Answer, deleteQuestion_Answer, };