const { roleService } = require("../services")


const createRole = async (req, res) => {
    try{
        const newRole = await roleService.createRole(req.body);
        res.json(newRole);
    }catch(err){
        res.status(500).json({action: 'createRole', error: err.message});
    }
};
/* 
const getRole = async (req,res,) =>{
    try{
        const role = await roleService.getRole(req.params.userId);
        if(!role) {
            res.status(404).json({action: 'getRole', error: 'Role Not Found'});
        }else{
            res.json(role);
        }
    }catch(err){
        res.status(500).json({action: 'getRole', error: err.message});
    }
};

const putRole = (req,res,) =>{
    console.log(`Role found with id ${req.params.bookId}.`);
    res.json({id: req.params.bookId, ...req.body});
};
 */


module.exports = {createRole, /* getRole, putRole, */ };