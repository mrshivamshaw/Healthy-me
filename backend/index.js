import express, { json } from "express";
import { config as configDotenv } from "dotenv";
import dbConnect from "./config/database.js";
configDotenv()

const app = express()

const port = process.env.PORT || 4000

app.use(express.json())

app.listen(port,()=>console.log("Port started at : ",port))
dbConnect()
app.get('/',(req,res)=>{
    res.send("Helloo jii")
})