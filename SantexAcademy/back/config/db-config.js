  module.exports = {
    development: {
      dialect: "sqlite",
      storage: "./database/.dev-database.sqlite",    
      // Configuración para seeders
      seederStorage: "json",
      seederStoragePath: "seeds.json", 
      // Configuración para migrations
      migrationStorage: "json",
      migrationStorageTableName: "migrations.json",
      define: {  
        // Genera claves foraneas de este tipo user_id en vez de userId
        underscored: true
      }
    },
    test: {
      dialect: "sqlite",
      storage: ":memory:",    
      // Configuración para seeders
      seederStorage: "json",
      seederStoragePath: "seeds.json", 
      // Configuración para migrations
      migrationStorage: "json",
      migrationStorageTableName: "migrations.json",
      define: {  
        // Genera claves foraneas de este tipo user_id en vez de userId
        underscored: true
      }
    },
    production: {
      dialect: "sqlite",
      storage: "./database/.prod-database.sqlite",    
      // Configuración para seeders
      seederStorage: "json",
      seederStoragePath: "seeds.json", 
      // Configuración para migrations
      migrationStorage: "json",
      migrationStorageTableName: "migrations.json",
      define: {  
        // Genera claves foraneas de este tipo user_id en vez de userId
        underscored: true
      }
    }
  };
