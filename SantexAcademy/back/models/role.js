/*const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
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
    modelName: 'Role',
  });
  return Role;
};*/

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");


const Role = sequelize.define("Roles",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


module.exports = Role;