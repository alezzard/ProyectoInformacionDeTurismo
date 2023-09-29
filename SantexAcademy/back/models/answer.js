const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");


const Answer = sequelize.define("Answers",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


module.exports = Answer;