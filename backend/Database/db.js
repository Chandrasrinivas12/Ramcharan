require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const mongoURI = process.env.MONGODB_URI;

const app = express();

// Enable CORS for your frontend URL
const corsOptions = {
  origin: "https://mern-college-app.onrender.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials such as cookies, authorization headers
};

app.use(cors(corsOptions));

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = { connectToMongo, app };
