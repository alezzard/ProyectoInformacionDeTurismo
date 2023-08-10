const { userService } = require("../services")

const createUser = async (req, res) => {
    try{
        const newUser = await userService.createUser(req.body);
        res.json(newUser);
    }catch(err){
        res.status(500).json({action: 'createUser', error: err.message});
    }
};

const getUser = async (req,res,) =>{
    try{
        const user = await userService.getUser(req.params.userId);
        if(!user) {
            res.status(404).json({action: 'getUser', error: 'User Not Found'});
        }else{
            res.json(user);
        }
    }catch(err){
        res.status(500).json({action: 'getUser', error: err.message});
    }
};

const putUser = (req,res,) =>{
    /* console.log(`User found with id ${req.params.bookId}.`); */
    res.json({id: req.params.bookId, ...req.body});
};



module.exports = {createUser, getUser, putUser, };