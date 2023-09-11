const { question_answerProvider } = require("../providers");

const createQuestion_Answer = async (body) => {
    const newQuestion_Answer = await question_answerProvider.createQuestion_Answer(body);
    return newQuestion_Answer;
}

const getAll = async () => {
    const surveysFound = await question_answerProvider.getAll();
    return surveysFound;
}

const getQuestion_Answer = async (question_answerId) => {
    const surveyFound = await question_answerProvider.getQuestion_Answer    (question_answerId);
    return surveyFound;
}


const putQuestion_Answer = async (question_answerId, question_answer) => {
    const updatedQuestion_Answer = await question_answerProvider.putQuestion_Answer(question_answerId, question_answer);
    return updatedQuestion_Answer;
}

const deleteQuestion_Answer = async (question_answerId) => {
    const deletedQuestion_Answer = await question_answerProvider.deleteQuestion_Answer(question_answerId);
    return deletedQuestion_Answer;
}


module.exports = { createQuestion_Answer, getAll, getQuestion_Answer, putQuestion_Answer, deleteQuestion_Answer }