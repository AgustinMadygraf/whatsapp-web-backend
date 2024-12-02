/*
Path: database/database.js
Este archivo es el encargado de la conexión con la base de datos.
*/

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: console.log, // Opcional, para ver las consultas SQL en la consola
});

sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Error connecting to the database:", err));
