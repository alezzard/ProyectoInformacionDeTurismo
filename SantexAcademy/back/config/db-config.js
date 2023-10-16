module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./database/.dev-database.sqlite",
    
    // Configuración para seeders
    seederStorage: "json",
    seederStoragePath: "seeds.json", 

    // Configuración para migrations
    migrationStorage: "json",
    migrationStorageTableName: "migrations.json"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",
    
    // Configuración para seedersnpx sequelize-cli
    seederStorage: "json",
    seederStoragePath: "seeds.json", 

    // Configuración para migrations
    migrationStorage: "json",
    migrationStorageTableName: "migrations.json"
  },
  production: {
    dialect: "sqlite",
    storage: "./database/.prod-database.sqlite",
    
    // Configuración para seeders
    seederStorage: "json",
    seederStoragePath: "seeds.json", 

    // Configuración para migrations
    migrationStorage: "json",
    migrationStorageTableName: "migrations.json"
  }
};
