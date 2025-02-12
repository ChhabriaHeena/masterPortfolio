const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
// import * as dotenv from "dotenv";
// dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

console.log(process.env.MONGO_URI);
const PORT = 5000;

// mongoose.connect('mongodb://127.0.0.1:27017/master_portfolio')
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err));

// mongoose.connect('mongodb://localhost:27017/')
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err));

// mongoose.connect('mongodb://heenarc23:heenarc23@cluster0.s7vdy.mongodb.net/master_portfolio?retryWrites=true&w=majority&appName=Cluster0')
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.log(err));

  mongoose.connect('mongodb+srv://heenarc23:HlE5OEFzT8s25QGC@cluster0.rlwum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));