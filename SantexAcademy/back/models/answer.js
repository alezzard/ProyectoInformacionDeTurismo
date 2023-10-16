const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Question = require("./question");

const Answer = sequelize.define("Answers",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    /* QuestionId: {
        type: DataTypes.INTEGER,
        references : {
          model: Question,
          key: 'id'
        }
      } */
});


module.exports = Answer;