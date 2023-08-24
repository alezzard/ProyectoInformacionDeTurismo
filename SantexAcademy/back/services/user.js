const { userProvider } = require("../providers");

const createUser = async (body) => {
    return await userProvider.createUser(body);
}

const getAll = async () => {
    const users = await userProvider.getAll();
    return users;
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

const validateUser = async (email, password) => {
    const userFound = await userProvider.validateUser(email,password);
    
    return userFound;
}




module.exports = { createUser, getAll, getUser, validateUser, putUser, deleteUser }