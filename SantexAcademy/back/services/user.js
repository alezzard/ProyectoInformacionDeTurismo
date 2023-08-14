const { userProvider } = require("../providers");

const createUser = async (body) => {
    return await userProvider.createUser(body);
}

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    return user;
}


const putUser = async (userId, user) => {
    const updatedUser = await userProvider.putUser(userId, user);
    return updatedUser;
}

const deleteUser = async (userId) => {
    const user = await userProvider.deleteUser(userId);
    return user;
}

const validateUser = async (user, pass) => {
    const userFound = await userProvider.validateUser({user,pass});
    
    return userFound;
}




module.exports = { createUser, getUser, validateUser, putUser, deleteUser }