const { question_answerService } = require("../services")

const createQuestion_Answer = async (req, res) => {
    try {
        const newQuestion_Answer = await question_answerService.createQuestion_Answer(req.body);
        res.status(201).json(newQuestion_Answer);
    } catch (err) {
        res.status(500).json({ action: 'createQuestion_Answer', error: err.message });
    }
};

const getAll = async(req,res) => {
    try{
        const question_answersFound = await question_answerService.getAll();
        if (!question_answersFound || question_answersFound.length == 0 ){
            res.status(404).json({action: 'getAll', error: 'Question_Answers Not Found'});
        } else {
            res.json(question_answersFound);
        }
    } catch(err){
        res.status(500).json({action: 'getAll', error: err.message});
    }
};

/* const getAllQuestions = async (req, res,) => {
    try {
        const question_answersFound = await question_answerService.getAllQuestions();
        if (!question_answersFound) {// ver que lenght sea distinto de cero
            res.status(404).json({ action: 'getAllQuestions', error: 'Question_Answers Not Found' });
        } else {
            res.json(question_answersFound);
        }
    } catch (err) {
        res.status(500).json({ action: 'getAllQuestions', error: err.message });
    }
};

const getAllAnswers = async (req, res,) => {
    try {
        const question_answersFound = await question_answerService.getAllAnswers();
        if (!question_answersFound) {
            res.status(404).json({ action: 'getAllAnswers', error: 'Question_Answers Not Found' });
        } else {
            res.json(question_answersFound);
        }
    } catch (err) {
        res.status(500).json({ action: 'getAllAnswers', error: err.message });
    }
}; */

const getQuestion_Answer = async (req, res,) => {
    try {
        const { questionId, answerId } = req.params;
        if (!answerId) {
            console.log("")
            const questionFound = await question_answerService.getQuestion_Answer(questionId);
            if (!questionFound) {
                res.status(404).json({ action: 'getQuestion', error: 'Question Not Found' });
            } else {
                res.json(questionFound);
            }
        }else if(!questionId){
            console.log("ra")
            const answerFound = await question_answerService.getQuestion_Answer(answerId);
            if (!answerFound) {
                res.status(404).json({ action: 'getAnswer', error: 'Answer Not Found' });
            } else {
                res.json(answerFound);
            }
        }
    } catch (err) {
        res.status(500).json({ action: 'getQuestion_Answer', error: err.message });
    }
};

const putQuestion_Answer = async (req, res,) => {
    const question_answerId = req.params.questionId;
    const question_answer = req.body;

    try {
        if (!question_answerId) {
            res.status(404).json({ action: 'updateQuestion_Answer', error: 'Question_Answer Not Found' });
        } else {
            const updatedQuestion_Answer = await question_answerService.putQuestion_Answer(question_answerId, question_answer);
            res.json(updatedQuestion_Answer);
        }
    } catch (err) {
        res.status(500).json({ action: 'putQuestion_Answer', error: err.message });
    }

};


const deleteQuestion_Answer = async (req, res,) => {
    try {
        const question_answer = await question_answerService.deleteQuestion_Answer(req.params.questionId);
        if (!question_answer) {
            res.status(404).json({ action: 'deleteQuestion_Answer', error: 'Question_Answer Not Found' });
        } else {
            res.json(question_answer);
        }
    } catch (err) {
        res.status(500).json({ action: 'deleteQuestion_Answer', error: err.message });
    }
};

module.exports = { createQuestion_Answer, getAll, /* getAllQuestions, getAllAnswers, */ getQuestion_Answer, putQuestion_Answer, deleteQuestion_Answer };