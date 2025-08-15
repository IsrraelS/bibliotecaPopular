import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import  { connectDB } from "./config/db";

const app = express();

// configuracion de CORS
app.use(cors());

//
app.use(express.json());

//
connectDB();

// Ruta GET /
app.get("/", (req, res) =>{
    res.send("API Biblioteca funcionando");
});

//Escuchar en el puerto 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:${PORT}');
});