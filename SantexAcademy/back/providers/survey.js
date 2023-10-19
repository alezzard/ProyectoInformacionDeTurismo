const { Survey } = require("../models");
const userProvider = require("../providers/user");
const questionProvider = require("../providers/question");

const createSurvey = async (body) => {
    try {

        //extraigo lo necesario del body
        const {user_id, name, description} = body;  
        //crea la encuesta
        const newSurvey = await Survey.create({name, description});
        
        //relaciono la encuesta con el usuario        
        const userFound = await userProvider.getUser(user_id);        
        await userFound.addSurvey(newSurvey);

        //relaciono la encuesta con las preguntas
        const questionsFound = await questionProvider.getAll();
        questionsFound.forEach(async questionFound => {
            await questionFound.addSurvey(newSurvey);
        });
           

        return newSurvey
    } catch (err) {
        console.log(`Error when creating Survey.\n ${err}`);
        throw err;
    }
};
const getAll = async () => {
    try {
        /* const surveysFound = await Survey.findAll(); */
        const surveysFound = await Survey.findAll({include: { all:true}});
        return surveysFound;
    } catch (err) {
        console.log(`Error when fetching Surveys.\n ${err}`);
        throw err;
    }
};

const getSurvey = async (surveyId) => {
    try {
        const surveyFound = await Survey.findByPk(surveyId/*,  { include: { all: true } } */);
        return surveyFound;
    } catch (err) {
        console.log(`Error when fetching Survey ${surveyId}.\n ${err}`);
        throw err;
    }
};

const putSurvey = async (surveyId, survey) => {
    try {
        
        await getSurvey(surveyId);
        const updatedSurvey = await Survey.update(
            { ...survey }, 
            { where:{id:surveyId} },); 
            console.log(`Survey updated: ${updatedSurvey} with id:${surveyId}.`)
            return updatedSurvey;
        } catch (err) {
            console.log(`Error when updating Survey ${surveyId}.\n ${err}`);
            throw err;
        }
    };
    
   

const deleteSurvey = async (surveyId) => {
    try {
        const deletedSurvey = await Survey.destroy(
            {where: {id:surveyId}}
        );
        return deletedSurvey;
    } catch (err) {
        console.log(`Error when deleting Survey ${surveyId}.\n ${err}`);
        throw err;
    }
};




module.exports = { createSurvey, getAll, getSurvey, putSurvey, deleteSurvey };