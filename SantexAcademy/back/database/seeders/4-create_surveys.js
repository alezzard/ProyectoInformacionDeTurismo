'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();

    const surveys = [
      {
        name: "encuestas",
        description: "encuestas",
        created_at: currentDate,
        updated_at: currentDate
      }
    ];

    // Insertamos las encuestas
    await queryInterface.bulkInsert('surveys', surveys).catch(error => {
      console.log(error);
      throw error;
  });


  
    // Usamos el ID de la encuesta insertada para asociar con un usuario en User_x_Survey
    const surveyUserRelations = [
      {
        user_id: 1, 
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      }
    ];

    await queryInterface.bulkInsert('User_x_Survey', surveyUserRelations).catch(error => {
      console.log(error);
      throw error;
  });
  
  // Usamos el ID de la encuesta insertada para asociar con una pregunta en Question_x_Survey
  const surveyQuestionRelations = [
    {
      question_id: 1, 
      survey_id: 1,
      created_at: currentDate,
      updated_at: currentDate
    }
  ];

  return queryInterface.bulkInsert('Question_x_Survey', surveyQuestionRelations).catch(error => {
    console.log(error);
    throw error;
});



  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_x_Survey', null, {});
    await queryInterface.bulkDelete('Question_x_Survey', null, {});
    await queryInterface.bulkDelete('surveys', null, {});
  }
};
