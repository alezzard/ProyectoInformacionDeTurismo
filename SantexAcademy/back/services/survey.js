const { surveyProvider } = require("../providers");

const createSurvey = async (body) => {
    return await surveyProvider.createSurvey(body);
}

const getAll = async () => {
    const surveysFound = await surveyProvider.getAll();
    return surveysFound;
}

const getSurvey = async (surveyId) => {
    const surveyFound = await surveyProvider.getSurvey(surveyId);
    return surveyFound;
}


const putSurvey = async (surveyId, survey) => {
    console.log(`service:Getting survey ${survey} with id:${surveyId}.`)
    const updatedSurvey = await surveyProvider.putSurvey(surveyId, survey);
    return updatedSurvey;
}

const deleteSurvey = async (surveyId) => {
    const deletedSurvey = await surveyProvider.deleteSurvey(surveyId);
    return deletedSurvey;
}


module.exports = { createSurvey, getAll, getSurvey, putSurvey, deleteSurvey }