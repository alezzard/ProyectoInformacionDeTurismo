const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const { Survey } = require("./index");


const Question_Answer = sequelize.define("Question_Answer",{
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
    answer: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

/*Question_Answer.belongsToMany(Survey, { through: 'Question_Answer_Surveys'});
Survey.belongsToMany(Question_Answer, { through: 'Question_Answer_Surveys'});
 
User.belongsToMany(Profile, { through: 'User_Profiles' });
Profile.belongsToMany(User, { through: 'User_Profiles' });
 */

module.exports = Question_Answer;