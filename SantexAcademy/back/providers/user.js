const { Op, where } = require("sequelize");
const { User } = require("../models");

const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (err) {
        
        throw err;
    }
};

const getAll = async () => {
    try {
        const usersFound = await User.findAll();
        /* const usersFound = await User.findAll({include: { all:true}});   */      
        return usersFound;
    } catch (err) {
        console.log(`Error when fetching Users.\n ${err}`);
        throw err;
    }
};

const getUser = async (userId) => {
    try {
        const userFound = await User.findByPk(userId, { include: { all: true } });
        return userFound;
    } catch (err) {
        console.log(`Error when fetching User ${userId}.\n ${err}`);
        throw err;
    }
};

const getUserByCriteria = async (options) => {
    try {
        const userFound = await User.findAll({
            where: {
                [Op.or]: [
                    { firstName: options.firstName },
                    { lastName: options.lastName }
                ]
            }
        });
        return userFound;
    } catch (err) {
        console.log(`Error when fetching User ${userId}.\n ${err}`);
        /* console.log("Error when creating User.\n",err); */
        throw err;
    }
};


const putUser = async (userId, user) => {
    try {
        await getUser(userId);
         const updatedUser = await User.update(
            { ...user }, 
            { where:{id:userId} },); 
        return updatedUser;

        
    } catch (err) {
        console.log(`Error when updating User ${userId}.\n ${err}`);
        throw err;
    }
};


const deleteUser = async (userId) => {
    try {
        const deletedUser = await User.destroy(
            {where: {id:userId}}
        );
        return deletedUser;
    } catch (err) {
        console.log(`Error when deleting User ${userId}.\n ${err}`);
        throw err;
    }
};



const validateUser = async (email, password) => {
    try {
        const userFound = await User.findAll({
            where: {
                [Op.and] : [
                    {email: email} ,
                    {password: password }
                ]              
            },
        }, { include: {all: true}});
        if (userFound.length !== 0){
            return userFound;
        }
       /*  return false */;
    } catch (err) {
        console.log(`Error when validating User ${email}.\n ${err}`);
        return false;
    }
};



module.exports = { createUser, getAll, getUser, getUserByCriteria, putUser, deleteUser, validateUser,  };