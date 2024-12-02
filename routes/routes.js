/*
Path: routes/routes.js
Este archivo es el encargado de definir las rutas de la aplicación.
*/

import express from "express";
import * as controller from "../controller/controller.js";

const route = express.Router();

route.post("/posts/room", controller.addRooms);
route.post("/posts/room/:id", controller.addMessages)
route.get("/posts/room", controller.getRooms);
route.get("/posts/room/:id", controller.getSingleRoom);



export default route;
