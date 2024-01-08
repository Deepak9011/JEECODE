// import React from 'react';
// import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// import Payment from "./views/Payment";
const React = require("react");
const ReactDOM = require("react-dom");
var ReactDomServer = require("react-dom/server");
const Payment=require('./views/Payment');
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");
const session = require("express-session");
const multer = require("multer");

app.use(
  session({
    secret: "1234", // You should generate and keep this key secure
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // for testing purposes, set secure to false. For production, set it to true if using https.
  })
);

const storage = multer.memoryStorage(); // Store the image in memory
const upload = multer({ storage: storage });

// define a port where we will run the application
let port = 3000;

// path settings
const path = require("path");
// add default paths to use ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// public path
app.use(express.static(path.join(__dirname, "/public")));

// connecting to database
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jeecode",
  password: "Jayeshsql",
  port: 5432,
});

let user = "";
// to parse the post requests
app.use(express.urlencoded({ express: true }));
app.use(express.json());
app.use(bodyParser.json());

// override with post having    ?_method=PATCH
app.use(methodOverride("_method"));

// add request listener
app.listen(port, () => {
  console.log("listening on port no. 3000");
});

// testing
app.get("/apple", (req, res) => {
  res.send("this is apple reqest");
});
app.get("/", (req, res) => {
  res.render("homeBefore.ejs");
});

// student register request getting  ----> start

app.get("/studentRegister", (req, res) => {
  res.render("studentRegister.ejs");
});
