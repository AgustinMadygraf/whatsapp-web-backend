/*
Path: server.js
Este archivo es el punto de entrada de la aplicación. Aquí, configuramos 
el servidor y conectamos la aplicación con la base de datos.
*/

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Pusher from "pusher";
import { sequelize } from "./database/database.js";

import route from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/posts", route);

// Pusher config
const pusher = new Pusher({
  appId: "1151698",
  key: "945758d3b6566a1295a9",
  secret: "289304c34954e5bec8ba",
  cluster: "ap2",
  useTLS: true,
});

// Test database connection
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("Error syncing the database:", err));

  app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });
  