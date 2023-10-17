'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    const answers = [
      {
          value:"en familia",
          created_at: currentDate,
          updated_at: currentDate,
          question_id: 1,
      },
      {
          value:"con amigos",
          created_at: currentDate,
          updated_at: currentDate,
          question_id: 1,
      },
      {
          "value":"sol@",
          created_at: currentDate,
          updated_at: currentDate,
          question_id: 1,
      }
    ];
    // Insertamos las respuestas
    await queryInterface.bulkInsert('answers', answers).catch(error => {
        console.log(error);
        throw error;
    });

    // Ahora, usando los IDs de las respuestas insertadas, asociamos con un usuario en Answer_x_User
    const answerUserRelations = [
      {
        answer_id: 1, 
        user_id: 1, 
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 2,
        user_id: 1, 
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 3,
        user_id: 1, 
        created_at: currentDate,
        updated_at: currentDate
      }
    ];

    await queryInterface.bulkInsert('Answer_x_User', answerUserRelations).catch(error => {
      console.log(error);
      throw error;
  });

  // Ahora, usando los IDs de las respuestas insertadas, asociamos con una encuesta en Answer_x_Survey
  const answerSurveyRelations = [
    {
      answer_id: 1, 
      survey_id: 1, 
      created_at: currentDate,
      updated_at: currentDate
    },
    {
      answer_id: 2,
      survey_id: 1, 
      created_at: currentDate,
      updated_at: currentDate
    },
    {
      answer_id: 3,
      survey_id: 1, 
      created_at: currentDate,
      updated_at: currentDate
    }
  ];

    return queryInterface.bulkInsert('Answer_x_Survey', answerSurveyRelations).catch(error => {
      console.log(error);
      throw error;
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answer_x_User', null, {}); 
    await queryInterface.bulkDelete('Answer_x_Survey', null, {});
    await queryInterface.bulkDelete('answers', null, {});
     
  }
};