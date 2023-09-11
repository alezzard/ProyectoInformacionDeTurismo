/*const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type_Question extends Model {
    *
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate() {
      // define association here
      
    }
  }
  User.init({
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Type_Question',
  });
  return Type_Question;
};*/

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const { Question_Answer } = require("./index");

const Type_Question = sequelize.define("Type_Questions",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

/* Type_Question.hasMany(Question_Answer);
Question_Answer.belongsTo(Type_Question);  */

module.exports = Type_Question;