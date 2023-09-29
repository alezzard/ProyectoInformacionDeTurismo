const { userService } = require("../services")

const createUser = async (req, res) => {
    const user = req.body;
    
    try{
        const newUser = await userService.createUser(user);
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({action: 'createUser', error: err.message});
    }
};

const getAll = async (req,res,) =>{
    try{
        const usersFound = await userService.getAll();
        if(!usersFound || usersFound.length == 0) {
            res.status(404).json({action: 'getAll', error: 'Users Not Found'});
        }else{
            res.json(usersFound);
        }
    }catch(err){
        res.status(500).json({action: 'getAll', error: err.message});
    }
};

const getUser = async (req,res,) =>{
    const userId = req.params.userId;
    
    try{
        const userFound = await userService.getUser(userId);
        if(!userFound) {
            res.status(404).json({action: 'getUser', error: 'User Not Found'});
        }else{
            res.json(userFound);
        }
    }catch(err){
        res.status(500).json({action: 'getUser', error: err.message});
    }
};

const putUser = async (req,res,) =>{
    const userId = req.params.userId;
    const user = req.body;
    
    try{
        if(!userId ) {
            res.status(404).json({action: 'updateUser', error: 'User Not Found'});
        }else{
            const updatedUser = await userService.putUser(userId, user); 
            res.json(updatedUser);
        }
    }catch(err){
        res.status(500).json({action: 'putUser', error: err.message});
    }
    
};


const deleteUser = async (req,res,) =>{
    const userId = req.params.userId;
    
    try{
        const user = await userService.deleteUser(userId);
        if(!user) {
            res.status(404).json({action: 'deleteUser', error: 'User Not Found'});
        }else{
            res.json(user);
        }
    }catch(err){
        res.status(500).json({action: 'deleteUser', error: err.message});
    }
};

module.exports = {createUser, getAll, getUser, putUser,  deleteUser };