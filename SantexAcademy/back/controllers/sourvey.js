const { surveyService } = require("../services")

const createSurvey = async (req, res) => {
    const survey = req.body;
    try{
        const newSurvey = await surveyService.createSurvey(survey);
        res.status(201).json(newSurvey);
    }catch(err){
        res.status(500).json({action: 'createSurvey', error: err.message});
    }
};

const getAll = async (req,res,) =>{
    try{
        const surveysFound = await surveyService.getAll();
        if(!surveysFound || surveysFound.length == 0) {
            res.status(404).json({action: 'getAll', error: 'Surveys Not Found'});
        }else{
            res.json(surveysFound);
        }
    }catch(err){
        res.status(500).json({action: 'getAll', error: err.message});
    }
};

const getSurvey = async (req,res,) =>{
    const surveyId = req.params.surveyId;
    try{
        const surveyFound = await surveyService.getSurvey(surveyId);
        if(!surveyFound) {
            res.status(404).json({action: 'getSurvey', error: 'Survey Not Found'});
        }else{
            res.json(surveyFound);
        }
    }catch(err){
        res.status(500).json({action: 'getSurvey', error: err.message});
    }
};

const putSurvey = async (req,res,) =>{
    const surveyId = req.params.surveyId;
    const survey = req.body;
    
    console.log(`controller:Getting survey ${survey} with id:${surveyId}.`)
    try{
        if(!surveyId ) {
            res.status(404).json({action: 'updateSurvey', error: 'Survey Not Found'});
        }else{
            const updatedSurvey = await surveyService.putSurvey(surveyId, survey); 
            res.json(updatedSurvey);
        }
    }catch(err){
        res.status(500).json({action: 'putSurvey', error: err.message});
    }
    
};


const deleteSurvey = async (req,res,) =>{
    const surveyId = req.params.surveyId;
    try{
        const udeletedSurvey = await surveyService.deleteSurvey(surveyId);
        if(!udeletedSurvey) {
            res.status(404).json({action: 'deleteSurvey', error: 'Survey Not Found'});
        }else{
            res.json(udeletedSurvey);
        }
    }catch(err){
        res.status(500).json({action: 'deleteSurvey', error: err.message});
    }
};
module.exports = {createSurvey, getAll, getSurvey, putSurvey,  deleteSurvey };