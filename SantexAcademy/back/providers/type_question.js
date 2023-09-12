/* const { Op } = require("sequelize"); */
const { Tipe_Question } = require("../models");

const createType_Question = async (type_question) => {
    try {
        const newType_Question = await Type_Question.create(type_question);
        return newType_Question;
    } catch (err) {
        console.log(`Error when creating type_question ${type_question}.\n ${err}`);
        throw err;
    }
};

const getAll = async () => {
    try {
        const type_questionsFound = await Type_Question.findAll();
        /* const usersFound = await Tipe_Question.findAll({include: { all:true}});   */      
        return type_questionsFound;
    } catch (err) {
        console.log(`Error when fetching Type_Questions.\n ${err}`);
        throw err;
    }
};
 


const getType_Question = async (type_questionId) => {
    try {
        const type_question = await Type_Question.findByPk(type_questionId, { include: { all: true } });
        return type_question;
    } catch (err) {
        console.log(`Error when fetching type_question ${type_questionId}.\n ${err}`);
        throw err;
    }
};
const putType_Question = async (type_questionId, type_question) => {
    try {
        await getType_Question(type_questionId);
         const updatedType_Question = await Type_Question.update(
            { ...type_question }, 
            { where:{id:type_questionId} },); 
        return updatedType_Question;

        
    } catch (err) {
        console.log(`Error when updating type_question ${type_questionId}.\n ${err}`);
        throw err;
    }
};


const deleteType_Question = async (type_questionId) => {
    try {
        const deletedType_Question = await Type_Question.destroy(
            {where: {id:type_questionId}}
        );
        return deletedType_Question;
    } catch (err) {
        console.log(`Error when deleting type_question ${type_questionId}.\n ${err}`);
        throw err;
    }
};

module.exports = { createType_Question, getAll, getType_Question, putType_Question, deleteType_Question };