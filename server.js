require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/index");
const port = 8000;
const mongoose = require("./config/connection"); // Se conecta el mongo
const dbInitialSetup = require("./dbInitialSetup");
const cors = require("cors");
app.use(cors());

//dbInitialSetup();
// Middlewares integrados:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(port);
