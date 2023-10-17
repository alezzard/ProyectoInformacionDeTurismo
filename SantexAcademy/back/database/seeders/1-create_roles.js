'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    const roles = [
      { name: "admin", description: "role admin", created_at: currentDate, updated_at: currentDate },
      { name: "user", description: "role user", created_at: currentDate, updated_at: currentDate },
    ];
      return queryInterface.bulkInsert('roles', roles, {}).catch(error => {
        console.log(error);
        throw error;
    });
    
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete('roles', null, {});
     
  }
};
