const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");


const Question = sequelize.define("Questions",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    optionAnswer: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


module.exports = Question;