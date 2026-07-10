require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Ecommerce");
})


const port = 5000;


app.listen(port,()=>{
    console.log(`App is running on ${port}`);
})

