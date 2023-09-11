const  userProvider = require("./user");  
const  roleProvider = require("./role"); 
const  surveyProvider = require("./survey");  
const  question_answerProvider = require("./question_answer");
const  type_questionProvider = require("./type_question");  

module.exports = { 
    
    userProvider, 
    roleProvider, 
    surveyProvider, 
    question_answerProvider,
    type_questionProvider, 
};