'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsToMany(models.Survey, { through: "Question_x_Survey"});
      Question.hasMany(models.Answer, {/* as: "respuesta", */ foreignKey: "question_id"});
    }
  }
  Question.init({
    value: DataTypes.STRING,
    answerOptions: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
  });
  return Question;
};