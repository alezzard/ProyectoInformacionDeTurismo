module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./database/.dev-database.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    dialect: "sqlite",
    storage: "./database/.prod-database.sqlite"
  }
};
