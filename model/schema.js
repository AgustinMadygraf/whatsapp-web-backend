/*
Path: model/schema.js
Este archivo es el encargado de definir el esquema de la base de datos.
*/

import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  name: String,
  roomMessages: [
    {
      name: String,
      message: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("Room", whatsappSchema);
