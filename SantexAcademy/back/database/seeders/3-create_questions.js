'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    const questions = [
      {
          value: "A través de qué medio conoció el destino Mina Clavero? (Puede marcar más de una opción)",
          answer_options:"Televisión, Página Web, Radio, Medios Gráficos, Facebook, Recomendación, Otro",
          description:"check_boxs",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Por qué eligió Mina Clavero para pasar sus vacaciones? (Puede marcar más de una opción)",
          answer_options:"Porque ya conocía y le gustó el lugar, Porque se lo recomendaron, Porque vio alguna promoción en los medios, Porque es un lugar tranquilo para la familia, Por sus paisajes, Por sus eventos, Por la amabilidad de los vecinos, Otros",
          description:"check_boxs",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "En cuanto a Hospedaje: ¿Ud. llegó a Mina Clavero?",
          answer_options:"Con Reserva, Sin Reserva",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿A través de que medio hizo la reserva?",
          answer_options:"",
          description: "redactar",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Qué tipo de Hospedaje ha tomado?",
          answer_options:"Hotel, Cabaña, Hostería, Camping, Casa de alquiler, Otro",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Cómo es el servicio en el hospedaje que ha contratado?",
          answer_options:"Excelente, Muy Buena, Buena, Regular, Mala, Muy Mala, Pésima",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Recibió material informativo de la Secretaría de Turismo en el hospedaje donde se alojó?",
          answer_options:"Si, No",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Cuál?",
          answer_options:"",
          description: "redactar",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Ud. pidió información en las Oficinas de Turismo de Mina Clavero? ",
          answer_options:"Si, No",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿En qué Oficina lo hizo?",
          answer_options:"Oficina de la Rotonda de Ingreso, Oficina de Plazoleta Merlo, Oficina de la Terminal, Otro",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Qué tipo de Información solicitó en las Oficinas de Turismo de Mina Clavero? (Puede marcar más de una opción)",
          answer_options:"Hospedaje, Paseo, Eventos, Gastronomía, Turismo Aventura, Servicios, Rutas, Otros",
          description: "check_box",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿A través de que medio solicitó información en las Oficina de Turismo de Mina Clavero?(Puede marcar más de una opción)",
          answer_options:"Personalmente, Vía mail, Vía Facebook, Vía Telefónica, Otros",
          description: "check_box",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Qué tipo de material se le entregó en la Oficina de Turismo? ",
          answer_options:"Folleto, Revista, Planos, Calcomanías, Guía de Servicios",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Cómo evalúa el tipo de información brindada por las Oficinas de Turismo de Mina Clavero?",
          answer_options:"Excelente, Muy Buena, Buena, Regular, Mala, Muy Mala, Pésima",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Aparte de la información solicitada, se le brindó algún otro tipo de información de su interés?",
          answer_options:"Si, No",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Qué información se le brindo?(Puede marcar más de una opción)",
          answer_options:"Espectáculos en Mina Clavero, Espectáculos en localidades cercanas, Recreación, Actividades deportivas, Turismo Aventura, Paseos, Otros",
          description: "check_box",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "Considera a Mina Clavero como un destino completo en cuanto a su oferta y servicios?",
          answer_options:"Si, No",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Porque?",
          answer_options:"",
          description: "redactar",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Recomendaría Mina Clavero como destino turístico?",
          answer_options:"Si, No",
          description: "radio_button",
          created_at: currentDate,
          updated_at: currentDate,
      },
      {
          value: "¿Porque?",
          answer_options:"",
          description: "redactar",
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