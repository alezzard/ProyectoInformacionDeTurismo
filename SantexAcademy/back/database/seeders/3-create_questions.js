'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    const questions = [
      {
          value: "¿Con quien visitas Mina Clavero?",
          answer_options:"{}",
          description:"encuestas",
          created_at: currentDate,
          updated_at: currentDate,
      },
  ];
      return queryInterface.bulkInsert('questions', questions, {}).catch(error => {
        console.log(error);
        throw error;
    });
    
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete('questions', null, {});
     
  }
};