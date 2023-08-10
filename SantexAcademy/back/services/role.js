const { roleProvider } = require("../providers");

const createRole = async (role) => {
    console.log(`service:${role}`)
    return await roleProvider.createRole(role);
}

/* const getRole = async (roleId) => {
    const role = await roleProvider.getRole(roleId);
    if (role){
        //logica de negocio
    }
    return role;
}

const validateRole = async (role, pass) => {
    const roleFound = await roleProvider.validateRole({role,pass});
    
    return roleFound;
}

 */

module.exports = { createRole,/* getRole, validateRole, */ }