import morgan from "morgan";
import express, { Router }  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "../backend/Route/Userroutes.js"

const app =express();
dotenv.config();
 app.use(morgan('dev'));

 app.use(express.json());
 app.use(cors());
 app.use('/api/v1',router);
 
 mongoose.connect(process.env.MONGO)
.then(()=>console.log("db connected"))
.catch((err)=>console.log("error",err));


app.listen(process.env.PORT,()=>console.log(`working on port ${process.env.PORT}`));
