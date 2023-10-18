'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Survey.belongsToMany(models.User, { through: "User_x_Survey" });
      Survey.belongsToMany(models.Question, { through: "Question_x_Survey"});
      Survey.belongsToMany(models.Answer, { through: "Answer_x_Survey"});
    }
  }
  Survey.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Survey',
    tableName: 'surveys'
  });
  return Survey;
};