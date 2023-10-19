'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const answers = [
      //question_id: 1
      {
        value: "Página Web",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 1,
      },
      {
        value: "Facebook@",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 1,
      },
      {
        value: "Facebook@",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 1,
      },
      //question_id: 2
      {
        value: "Porque vio alguna promoción en los medios",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 2
      },
      {
        value: "Porque vio alguna promoción en los medios",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 2
      },
      {
        value: "Porque es un lugar tranquilo para la familia",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 2
      },
      //question_id: 3
      {
        value: "Sin Reserva",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 3
      },
      {
        value: "Con Reserva",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 3
      },
      {
        value: "Sin Reserva",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 3
      },
      //question_id: 4
      {
        value: "No hice reserva",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 4
      },
      {
        value: "Whatsapp",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 4
      },
      {
        value: "No hice reserva",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 4
      },
      //question_id: 5
      {
        value: "Cabaña",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 5
      },
      {
        value: "Cabaña",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 5
},
      {
        value: "Otro: en lo de un amigo",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 5
},
      //question_id: 6
      {
        value: "Muy Buena",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 6
      },
      {
        value: "Buena",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 6
      },
      {
        value: "Muy Buena",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 6
      },
      //question_id: 7
      {
        value: "No",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 7
      },
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 7
      },
      {
        value: "No",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 7
      },
      //question_id: 8
      {
        value: "NO",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 8
      },
      {
        value: "informacion de eventos",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 8
      },
      {
        value: "NO",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 8
      },
      //question_id: 9
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 9
      },
      {
        value: "No",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 9
      },
      {
        value: "No",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 9
      },
      //question_id: 10
      {
        value: "Oficina de la Terminal",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 10
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 10
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 10
      },
      //question_id: 11
      {
        value: "Gastronomía",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 11
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 11
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 11
      },
      //question_id: 12
      {
        value: "Personalmente",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 12
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 12
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 12
      },
      //question_id: 13
      {
        value: "Revista",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 13
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 13
      },
      {
        value: "Otro: No pedí",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 13
      },
      //question_id: 14
      {
        value: "Excelente",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 14
      },
      {
        value: "Buena",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 14
      },
      {
        value: "Buena",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 14
      },
      //question_id: 15
      {
        value: "No",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 15
      },
      {
        value: "No",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 15
      },
      {
        value: "No",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 15
      },
      //question_id: 16
      {
        value: "Otros",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 16
      },
      {
        value: "Otros",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 16
      },
      {
        value: "Otros",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 16
      },
      //question_id: 17
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 17
      },
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 17
      },
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 17
      },
      //question_id: 18
      {
        value: "Es un excelente lugar para vacacionar",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 18
      },
      {
        value: "La parte gastronomica es muy completa",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 18
      },
      {
        value: "Tiene todo para pasarlo en familia",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 18
      },

      //question_id: 19
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 19
      },
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 19
      },
      {
        value: "Si",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 19
      },

      //question_id: 20
      {
        value: "Hermosos paisajes",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 20
      },
      {
        value: "Comida muy rica",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 20
      },
      {
        value: "lugares muy lindos",
        created_at: currentDate,
        updated_at: currentDate,
        question_id: 20
      },
    ];

    // Insertamos las respuestas
    await queryInterface.bulkInsert('answers', answers).catch(error => {
      console.log(error);
      throw error;
    });

    // Ahora, usando los IDs de las respuestas insertadas, asociamos con un usuario en Answer_x_User
    const answerUserRelations = [
      //question_id: 1
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
      },
      //question_id: 2
      {
        answer_id: 4,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 5,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 6,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 3
      {
        answer_id: 7,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 8,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 9,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 4
      {
        answer_id: 10,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 11,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 12,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 5
      {
        answer_id: 13        ,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 14,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 15,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 6
      {
        answer_id: 16,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 17,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 18,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 7
      {
        answer_id: 19,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 20,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 21,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 8
      {
        answer_id: 22,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 23,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 24,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 9
      {
        answer_id: 25,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 26,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 27,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 10
      {
        answer_id: 28,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 29,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 30,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 11
      {
        answer_id: 31,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 32,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 33,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 12
      {
        answer_id: 34,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 35,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 36,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 13
      {
        answer_id: 37,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 38,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 39,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 14
      {
        answer_id: 40,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 41,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 42,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 15
      {
        answer_id: 43,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 44,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 45,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 16
      {
        answer_id: 46,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 47,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 48,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 17
      {
        answer_id: 49,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 50,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 51,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 18
      {
        answer_id: 52,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 53,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 54,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 19
      {
        answer_id: 55,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 56,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 57,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 20
      {
        answer_id: 58,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 59,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 60,
        user_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
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
      },

      //question_id: 2
      {
        answer_id: 4,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 5,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 6,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 3
      {
        answer_id: 7,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 8,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 9,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 4
      {
        answer_id: 10,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 11,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 12,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 5
      {
        answer_id: 13        ,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 14,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 15,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 6
      {
        answer_id: 16,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 17,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 18,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 7
      {
        answer_id: 19,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 20,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 21,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 8
      {
        answer_id: 22,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 23,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 24,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 9
      {
        answer_id: 25,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 26,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 27,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 10
      {
        answer_id: 28,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 29,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 30,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 11
      {
        answer_id: 31,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 32,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 33,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 12
      {
        answer_id: 34,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 35,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 36,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 13
      {
        answer_id: 37,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 38,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 39,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 14
      {
        answer_id: 40,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 41,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 42,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 15
      {
        answer_id: 43,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 44,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 45,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 16
      {
        answer_id: 46,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 47,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 48,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 17
      {
        answer_id: 49,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 50,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 51,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 18
      {
        answer_id: 52,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 53,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 54,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 19
      {
        answer_id: 55,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 56,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 57,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      //question_id: 20
      {
        answer_id: 58,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 59,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        answer_id: 60,
        survey_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
    ];

    return queryInterface.bulkInsert('Answer_x_Survey', answerSurveyRelations).catch(error => {
      console.log(error);
      throw error;
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answer_x_User', null, {});
    await queryInterface.bulkDelete('Answer_x_Survey', null, {});
    await queryInterface.bulkDelete('answers', null, {});

  }
};