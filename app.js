import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("Hay conexion a la base de datos")
})
.catch((error)=>{
    console.log("Hay un error: ", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor")
})

test()