import express from "express";
import { config as configDotenv } from "dotenv";
import dbConnect from "./config/database.js";
import router from "./routes/route.js";
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());
configDotenv();

dbConnect();
const port = process.env.PORT || 4000;


app.use('/api/v1', router);

// Define the '/' route before starting the server  
app.get('/', (req, res) => {
    res.send("Hello jii");
});

app.listen(port, () => console.log("Server started at port:", port));
