const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const User = require("./user");

const survey = sequelize.define("surveys",{
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

survey.belongsToMany(User, { through: 'Users_Surveys'});
User.belongsToMany(survey, { through: 'Users_Surveys'});
/* 
User.belongsToMany(Profile, { through: 'User_Profiles' });
Profile.belongsToMany(User, { through: 'User_Profiles' });
 */

module.exports = survey;