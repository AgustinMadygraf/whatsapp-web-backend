/*
Path: model/schema.js
Este archivo es el encargado de definir el esquema de la base de datos.
*/

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Room = sequelize.define("Room", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roomMessages: {
    type: DataTypes.JSON, // Para almacenar mensajes en formato JSON
    allowNull: true,
  },
}, {
  timestamps: false, // Opcional: evita columnas `createdAt` y `updatedAt`
});

export default Room;
