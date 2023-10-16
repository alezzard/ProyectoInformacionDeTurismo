const {sequelize} = require("../config/db-config");
const Role = require("../models/role");
const User = require("../models/user");
const Question = require("../models/question");
const Survey = require("../models/survey");
const Answer = require("../models/answer");

// Roles
const roles = [
  { name: "admin", description: "role admin" },
  { name: "user", description: "role user" },
];

// Usuarios
const users = [
  {
    email: "admin@email.com",
    password: "1234",
    firstName: "admin",
    lastName: "admin",
    description: "Usuario admin",
    RoleId: 1,
  },
  {
    email: "user@email.com",
    password: "1234",
    firstName: "user",
    lastName: "user",
    description: "Usuario",
    RoleId: 2,
  },
];

// Preguntas
const questions = [
    {
        "question": "¿Con quien vicitas Mina Clavero?",
        "optionAnswer":"",
        "description":"encuestas"
    },
];

// Encuetas
const surveys = [
    {
        "name":"encuestas",
        "description":"encuestas",
        "UserId":1
    }
];

// Respuestas
const answers = [
    {
        "userId": 1,
        "surveyId": 1,
        "questionId": 1,
        "answer":"en familia"
    },
    {
        "userId": 1,
        "surveyId": 1,
        "questionId": 1,
        "answer":"con amigos"
    },
    {
        "userId": 1,
        "surveyId": 1,
        "questionId": 1,
        "answer":"sol@"
    }
];

sequelize.sync({ force: false })
    .then(() => {
        console.log("coneccion establecida...");
        return Promise.all(roles.map(rol => Role.create(rol)));  // Creamos todos los roles
    })
    .then(() => {
        return Promise.all(users.map(user => User.create(user)));  // Creamos todos los usuarios
    })
    .then(() => {
        return Promise.all(questions.map(question => Question.create(question)));  // Creamos todas las preguntas
    })
    .then(() => {
        return Promise.all(surveys.map(survey => Survey.create(survey)));  // Creamos todas las encuestas
    })
    .then(() => {
        return Promise.all(answers.map(answer => Answer.create(answer)));  // Creamos todas las respuestas
    })
    .catch(error => {
        console.error(`Hubo un error durante la creación de las entidades: ${error}`);
    });