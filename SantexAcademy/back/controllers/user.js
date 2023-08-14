const { userService } = require("../services")

const createUser = async (req, res) => {
    try{
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({action: 'createUser', error: err.message});
    }
};

const getUser = async (req,res,) =>{
    try{
        const userFound = await userService.getUser(req.params.userId);
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
    try{
        const user = await userService.deleteUser(req.params.userId);
        if(!user) {
            res.status(404).json({action: 'deleteUser', error: 'User Not Found'});
        }else{
            res.json(user);
        }
    }catch(err){
        res.status(500).json({action: 'deleteUser', error: err.message});
    }
};

module.exports = {createUser, getUser, putUser,  deleteUser };