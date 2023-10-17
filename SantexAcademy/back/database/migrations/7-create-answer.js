'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key:"id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Answers');
  }
};