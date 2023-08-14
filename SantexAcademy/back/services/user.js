const { userProvider } = require("../providers");

const createUser = async (user) => {
    const newUser = user.filter
    return await userProvider.createUser(user);
}

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    if (user){
        //logica de negocio
    }
    return user;
}


const putUser = async (userId, user) => {
    const updatedUser = await userProvider.putUser(userId, user);
    return updatedUser;
}

const setRoleUser = async (userId, user) => {
    const updatedUser = await userProvider.setRoleUser(userId, user);
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




module.exports = { createUser, getUser, validateUser, putUser, setRoleUser, deleteUser }