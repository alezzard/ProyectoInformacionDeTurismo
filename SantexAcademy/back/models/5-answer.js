'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Answer.belongsTo(models.Question, {/* as: "pregunta",  */foreignKey: "question_id"});
      Answer.belongsToMany(models.User, { through: "Answer_x_User"});
      Answer.belongsToMany(models.Survey, { through: "Answer_x_Survey"});
    }
  }
  Answer.init({
    value: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
    tableName: 'answers'
  });
  return Answer;
};