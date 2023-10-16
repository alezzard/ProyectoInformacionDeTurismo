/*const {
  Model,
} = require('sequelize');
const Role = require("./role")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    *
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate() {
      // define association here
      Role.hasMany(User);
      User.belongsTo(Role);
    }
  }
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    descriprions: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};*/

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Role = require("./role");

const User = sequelize.define("Users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    /* RoleId: {
      type: DataTypes.INTEGER,
      references : {
        model: Role,
        key: 'id'
      }
    } */
});




module.exports = User;