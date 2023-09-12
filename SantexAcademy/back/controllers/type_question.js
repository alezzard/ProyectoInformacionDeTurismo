const { type_questionService } = require("../services")

const createTipe_Question = async (req, res) => {
    try{
        const newTipe_Question = await type_questionService.createTipe_Question(req.body);
        res.status(201).json(newTipe_Question);
    }catch(err){
        res.status(500).json({action: 'createTipe_Question', error: err.message});
    }
};

const getAll = async (req,res,) =>{
    try{
        const tipe_questionsFound = await type_questionService.getAll();
        if(!tipe_questionsFound) {
            res.status(404).json({action: 'getAll', error: 'Tipe_Questions Not Found'});
        }else{
            res.json(tipe_questionsFound);
        }
    }catch(err){
        res.status(500).json({action: 'getAll', error: err.message});
    }
};

const getTipe_Question = async (req,res,) =>{
    try{
        const tipe_questionFound = await type_questionService.getTipe_Question(req.params.tipe_questionId);
        if(!tipe_questionFound) {
            res.status(404).json({action: 'getTipe_Question', error: 'Tipe_Question Not Found'});
        }else{
            res.json(tipe_questionFound);
        }
    }catch(err){
        res.status(500).json({action: 'getTipe_Question', error: err.message});
    }
};

const putTipe_Question = async (req,res,) =>{
    const tipe_questionId = req.params.tipe_questionId;
    const tipe_question = req.body;
    
    try{
        if(!tipe_questionId ) {
            res.status(404).json({action: 'updateTipe_Question', error: 'Tipe_Question Not Found'});
        }else{
            const updatedTipe_Question = await type_questionService.putTipe_Question(tipe_questionId, tipe_question); 
            res.json(updatedTipe_Question);
        }
    }catch(err){
        res.status(500).json({action: 'putTipe_Question', error: err.message});
    }
    
};


const deleteTipe_Question = async (req,res,) =>{
    try{
        const tipe_question = await type_questionService.deleteTipe_Question(req.params.tipe_questionId);
        if(!tipe_question) {
            res.status(404).json({action: 'deleteTipe_Question', error: 'Tipe_Question Not Found'});
        }else{
            res.json(tipe_question);
        }
    }catch(err){
        res.status(500).json({action: 'deleteTipe_Question', error: err.message});
    }
};

module.exports = {createTipe_Question, getAll, getTipe_Question, putTipe_Question,  deleteTipe_Question };