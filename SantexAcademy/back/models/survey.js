const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const Survey = sequelize.define("surveys",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Survey;