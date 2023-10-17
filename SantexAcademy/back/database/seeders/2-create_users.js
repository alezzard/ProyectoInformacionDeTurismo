"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const users = [
      {
        email: "admin@email.com",
        password: "admin",
        first_name: "admin",
        last_name: "admin",
        description: "Usuario admin",
        created_at: currentDate,
        updated_at: currentDate,
        role_id: 1,
      },
      {
        email: "user@email.com",
        password: "user",
        first_name: "user",
        last_name: "user",
        description: "Usuario",
        created_at: currentDate,
        updated_at: currentDate,
        role_id: 2,
      },
    ];
    return queryInterface.bulkInsert("users", users, {}).catch((error) => {
      console.log(error);
      throw error;
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
