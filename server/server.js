require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// Database code 
// // // dont forget
// end of database code


// mid
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//importing routes


//runner

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.warn("Server is running on port: ",PORT);
});