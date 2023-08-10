const { Op } = require("sequelize");
const { User } = require("../models");

const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (err) {
        
        throw err;
    }
};

const getUser = async (userId) => {
    try {
        const user = await User.findByPk(userId, { include: { all: true } });
        return user;
    } catch (err) {
        console.log(`Error when fetching User ${userId}.\n ${err}`);
        /* console.log("Error when creating User.\n",err); */
        throw err;
    }
};

const getUserByCriteria = async (options) => {
    try {
        const user = await User.findAll({
            where: {
                [Op.or]: [
                    { forstName: options.firstName },
                    { lastName: options.lastName }
                ]
            }
        });
        return user;
    } catch (err) {
        console.log(`Error when fetching User ${userId}.\n ${err}`);
        /* console.log("Error when creating User.\n",err); */
        throw err;
    }
};

const validateUser = async (options) => {
    try {
        const userFound = await User.findAll({
            where: {
                email: options.user ,
                password: options.pass 
            },
        });
        if (userFound.length !== 0){
            return userFound;
        }
        return false;
    } catch (err) {
        console.log(`Error when validating User ${userId}.\n ${err}`);
        return false;
    }
};



module.exports = { createUser, getUser, getUserByCriteria, validateUser,  };