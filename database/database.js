/*
Path: database/database.js
Este archivo es el encargado de la conexión con la base de datos.
*/

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ' + err));