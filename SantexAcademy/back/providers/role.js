/* const { Op } = require("sequelize"); */
const { Role } = require("../models");

const createRole = async (role) => {
    try {
        const newRole = await Role.create(role);
        return newRole;
    } catch (err) {
        console.log(`Error when creating role ${role}.\n ${err}`);
        throw err;
    }
};

const getAll = async () => {
    try {
        const rolesFound = await Role.findAll();
        /* const usersFound = await User.findAll({include: { all:true}});   */      
        return rolesFound;
    } catch (err) {
        console.log(`Error when fetching Roles.\n ${err}`);
        throw err;
    }
};
 


const getRole = async (roleId) => {
    try {
        const role = await Role.findByPk(roleId, { include: { all: true } });
        return role;
    } catch (err) {
        console.log(`Error when fetching role ${roleId}.\n ${err}`);
        throw err;
    }
};
const putRole = async (roleId, role) => {
    try {
        await getRole(roleId);
         const updatedRole = await Role.update(
            { ...role }, 
            { where:{id:roleId} },); 
        return updatedRole;

        
    } catch (err) {
        console.log(`Error when updating role ${roleId}.\n ${err}`);
        throw err;
    }
};


const deleteRole = async (roleId) => {
    try {
        const deletedRole = await Role.destroy(
            {where: {id:roleId}}
        );
        return deletedRole;
    } catch (err) {
        console.log(`Error when deleting role ${roleId}.\n ${err}`);
        throw err;
    }
};

module.exports = { createRole, getAll, getRole, putRole, deleteRole };