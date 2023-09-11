const { type_questionProvider } = require("../providers");

const createType_Question = async (type_question) => {
    return await type_questionProvider.createType_Question(type_question);
}

const getAll = async () => {
    const users = await type_questionProvider.getAll();
    return users;
}

const getType_Question = async (type_questionId) => {
    const type_question = await type_questionProvider.getType_Question(type_questionId);
    return type_question;
}
const putType_Question = async (type_questionId, type_question) => {
    const updatedType_Question = await type_questionProvider.putType_Question(type_questionId, type_question);
    return updatedType_Question;
}

const deleteType_Question = async (type_questionId) => {
    const deletedType_Question = await type_questionProvider.deleteType_Question(type_questionId);
    return deletedType_Question;
} 

module.exports = { createType_Question, getAll, getType_Question, putType_Question, deleteType_Question }