module.exports = {
  development: {
    username: "vinicius",
    password: "postgres",
    database: "dev_db",
    host: "172.25.0.1",
    port: 5433,
    dialect: "postgres",
  },
  test: {
    username: "test_user",
    password: "test_password",
    database: "test_db",
    host: "172.25.0.1",
    port: 5435,
    dialect: "postgres",
  },
  production: {
    username: "prod_user",
    password: "prod_password",
    database: "prod_db",
    host: "172.25.0.1",
    port: 5434,
    dialect: "postgres",
  },
};
