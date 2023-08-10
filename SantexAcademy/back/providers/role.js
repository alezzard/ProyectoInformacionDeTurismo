/* const { Op } = require("sequelize"); */
const { Role } = require("../models");

const createRole = async (role) => {
    try {
        const newRole = await Role.create(role);
        return newRole;
    } catch (err) {
        console.log(`Error when creating Role ${role}.\n ${err}`);
        throw err;
    }
};
/* 
const getRole = async (roleId) => {
    try {
        const role = await Role.findByPk(roleId, { include: { all: true } });
        return role;
    } catch (err) {
        console.log(`Error when fetching role ${roleId}.\n ${err}`);
        throw err;
    }
};

const getRoleByCriteria = async (options) => {
    try {
        const role = await Role.findAll({
            where: {
                [Op.or]: [
                    { forstName: options.firstName },
                    { lastName: options.lastName }
                ]
            }
        });
        return role;
    } catch (err) {
        console.log(`Error when fetching role ${roleId}.\n ${err}`);
        throw err;
    }
};

const validateRole = async (options) => {
    try {
        const roleFound = await Role.findAll({
            where: {
                email: options.role ,
                password: options.pass 
            },
        });
        if (roleFound.length !== 0){
            return roleFound;
        }
        return false;
    } catch (err) {
        console.log(`Error when validating Role ${roleId}.\n ${err}`);
        return false;
    }
};
 */


module.exports = { createRole, /* getRole, getRoleByCriteria, validateRole, */  };