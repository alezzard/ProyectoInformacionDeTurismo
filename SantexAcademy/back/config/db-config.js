const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ".database.sqlite"
});

const initializeDB = async () => {
    try {
        await sequelize.authenticate();
        /* console.log("Conexión a la base de datos establecida."); */
        await sequelize.sync({ force : false})// If is true,do DROP TABLE
    } catch (error) {
        /* console.error(`Hubo un error al inicializar la base de datos.\n ${error}`); */
    }
};

module.exports = { sequelize, initializeDB};