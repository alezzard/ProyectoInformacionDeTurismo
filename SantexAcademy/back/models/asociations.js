        const Role = require("./role");
        const User = require("./user");
        const Survey = require("./survey");
        const Question = require("./question");
        const Answer = require("./answer");

        /* relacion: 
                un Rol tiene muchos Usuarios
                un Usuario tiene un Rol
        */
        Role.hasMany(User);
        User.belongsTo(Role);

        /* relacion: 
                muchos Usuarios tienen muchas Encuestas
                muchas Encuestas tienen muchos Usuarios
        */
        User.belongsToMany(Survey, { through: "Users_Surveys" });
        Survey.belongsToMany(User, { through: "Users_Surveys" });

        /* relacion: 
                muchas Encuestas tienen muchas Preguntas
                muchas Preguntas tienen muchas Encuestas
        */
        Survey.belongsToMany(Question, { through: "Questions_Surveys"});
        Question.belongsToMany(Survey, { through: "Questions_Surveys"});

        /* relacion: 
                una Pregunta tiene muchas Respuestas
                una Pregunta tiene una Pregunta
        */
        Question.hasMany(Answer);
        Answer.belongsTo(Question);

        /* relacion: 
                muchas Respuestas tiene muchos Usuarios
                muchos Usuarios tienen muchas Respuestas
        */
        Answer.belongsToMany(User, { through: "Answers_Users"});
        User.belongsToMany(Answer, { through: "Answers_Users"});


        /* relacion: 
                muchas Encuestas tienen muchas Respuestas
                muchas Respuestas tiene muchas Encuestas
        */
        Survey.belongsToMany(Answer, { through: "Answers_Surveys"});
        Answer.belongsToMany(Survey, { through: "Answers_Surveys"});