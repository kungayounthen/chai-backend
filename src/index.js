// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from '../db/index.js'
import { app } from './app.js';

dotenv.config({ path: './env' })

connectDB()
  .then(() => {
    app.on("error",(error)=>{
    console.log("Err:",error);
    throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at :${process.env.PORT || 8000}`)
    })
  })
  .catch((err) => {
    console.log("MONGODB connection failed!.", err);
  });


//First Approach to connect to database.
/* import express from "express";
const app=express();

//IIFE to connect database.
; (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
    console.log("Error:",error);
    throw error
    });
    app.listen(process.env.PORT,()=>{
    console.log(`Listening on ${process.env.PORT}`);
    })
  } catch (e) {
    console.log(e.message)
  }
})()
 */