const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize({
  dialect: "postgres", // Cambia a tu dialecto de base de datos (por ejemplo, mysql, sqlite)
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = { sq: sequelize, testDbConnection };
