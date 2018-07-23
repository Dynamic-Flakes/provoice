const path = require("path");

// import .env variables
require("dotenv-safe").load({
  path: path.join(__dirname, "../../.env"),
  sample: path.join(__dirname, "../../.env.example")
});

module.exports = {
  app: process.env.APP || "development",
  port: process.env.PORT || "3000",
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  jwt_expiration: process.env.JWT_EXPIRATION || "10000",
  jwt_encryption: process.env.JWT_ENCRYPTION || "jwt_please_change",
  masterAccount: process.env.MASTER_ACCOUNT_NUMBER,
  masterAccountPassword: process.env.MASTER_ACCOUNT_PASSWORD,

  db_dialect: process.env.DB_DIALECT || "mongo",
  db_host: process.env.DB_HOST || "localhost",
  db_port: process.env.DB_PORT || "27017",
  db_name: process.env.DB_NAME || "name",
  db_user: process.env.DB_USER || "root",
  db_password: process.env.DB_PASSWORD || "db-password",

  mongo: {
    uri:
      process.env.NODE_ENV === "test"
        ? process.env.MONGO_URI_TESTS
        : process.env.MONGO_URI
  },
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev"
};
