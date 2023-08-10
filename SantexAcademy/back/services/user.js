const { userProvider } = require("../providers");

const createUser = async (user) => {
    return await userProvider.createUser(user);
}

const getUser = async (userId) => {
    const user = await userProvider.getUser(userId);
    if (user){
        //logica de negocio
    }
    return user;
}

const validateUser = async (user, pass) => {
    const userFound = await userProvider.validateUser({user,pass});
    
    return userFound;
}

const createTicket = async (userId, ticket) => {
    const user = await userProvider.getUser(userId);
    if (user){
        const newTicket = await userProvider.createTicket(userId, ticket);
        return newTicket;
    }
    return null;
}


module.exports = { createUser,getUser, validateUser,createTicket }