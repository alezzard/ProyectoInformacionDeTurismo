const { roleService } = require("../services")


const createRole = async (req, res) => {
    const role = req.body;
    try{
        const newRole = await roleService.createRole(role);
        res.json(newRole);
    }catch(err){
        res.status(500).json({action: 'createRole', error: err.message});
    }
};
const getAll = async (req,res,) =>{
    try{
        const usersFound = await roleService.getAll();
        if(!usersFound || usersFound.length == 0) {
            res.status(404).json({action: 'getAll', error: 'Users Not Found'});
        }else{
            res.json(usersFound);
        }
    }catch(err){
        res.status(500).json({action: 'getAll', error: err.message});
    }
};

const getRole = async (req,res,) =>{
    const roleId = req.params.roleId;
    try{
        const role = await roleService.getRole(roleId);
        if(!role) {
            res.status(404).json({action: 'getRole', error: 'Role Not Found'});
        }else{
            res.json(role);
        }
    }catch(err){
        res.status(500).json({action: 'getRole', error: err.message});
    }
};

 const putRole = async (req,res,) =>{
    const roleId = req.params.roleId;
    const role = req.body;
    try{
        if(!roleId){
            res.status(404).json({action: 'updateRole', error: 'Role not Found'});
        } else {
            const updatedRole = await roleService.putRole(roleId, role);
            res.json(updatedRole);
        }
    }catch(err){
        res.status(500).json({action: 'updateRole', error: err.message});
    }
};
const deleteRole = async (req,res,) =>{
    const roleId = req.params.roleId;
    try{
        const deletedRole = await roleService.deleteRole(roleId);
        if(!deletedRole) {
            res.status(404).json({action: 'deleteRole', error: 'Role Not Found'});
        }else{
            res.json(deletedRole);
        }
    }catch(err){
        res.status(500).json({action: 'deleteRole', error: err.message});
    }
};
 


module.exports = {createRole, getAll, getRole, putRole, deleteRole };