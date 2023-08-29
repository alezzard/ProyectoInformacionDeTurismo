const { roleProvider } = require("../providers");

const createRole = async (role) => {
    return await roleProvider.createRole(role);
}

const getAll = async () => {
    const users = await roleProvider.getAll();
    return users;
}

const getRole = async (roleId) => {
    const role = await roleProvider.getRole(roleId);
    return role;
}
const putRole = async (roleId, role) => {
    const updatedRole = await roleProvider.putRole(roleId, role);
    return updatedRole;
}

const deleteRole = async (roleId) => {
    const deletedRole = await roleProvider.deleteRole(roleId);
    return deletedRole;
} 

module.exports = { createRole, getAll, getRole, putRole, deleteRole }