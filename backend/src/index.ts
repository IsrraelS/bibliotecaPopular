import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
//import mongoose from "mongoose";
import  bookRoutes  from "./book.routes";

import  { connectDB } from "./config/db";

const app = express();

// Middawares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/book" , bookRoutes);

//conectar DB y arrancar servidor
connectDB();

// Ruta GET /
app.get("/", (req, res) =>{
    res.send("API Biblioteca funcionando");
});

//mongoose.connect ("mongodb://127.0.0.1:27017/biblioteca")

//Escuchar en el puerto 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:${PORT}');
});