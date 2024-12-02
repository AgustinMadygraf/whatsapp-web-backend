/*
Path: controller/controller.js
Este archivo es el encargado de manejar la lógica de la aplicación.
*/

import Rooms from "../model/schema.js";
import mongoose from "mongoose";
const { Types } = mongoose;

export const addRooms = async (req, res) => {
  try {
    const roomName = req.body; // Debería ser un objeto JSON con el campo "name"
    const room = await Rooms.create(roomName); // Usar Sequelize para crear la sala
    res.status(201).json(room);
  } catch (error) {
    console.error("Error adding room:", error);
    res.status(500).json({ error: "Error adding room" });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.findAll();
    if (rooms.length === 0) {
      return res.status(200).json({ message: "No rooms available. Please add one to get started!" });
    }
    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ error: "Error fetching rooms" });
  }
};

export const getSingleRoom = (req, res) => {
  const id = req.params.id;
  //console.log(id);
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).send("couldn't find data with " + req.params.id);
  }
  Rooms.findById(id, function (err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

export const addMessages = (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).send("couldn't find data with " + req.params.id);
  }
  const messageBody = req.body;
  console.log("body", messageBody);
  Rooms.findOneAndUpdate(
    { _id: id },
    { $push: { roomMessages: messageBody } },
    (error, success) => {
      if (error) {
        console.log(error);
      } else {
        res.json(success);
      }
    }
  );
};
