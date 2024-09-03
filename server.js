const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express()
const configureRoutes = require("./routes");
require("dotenv").config();
require("./db/db.connection");


// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
configureRoutes(app);


const port = process.env.PORT || 8000;
app.listen(port, async () => {
    console.log(`~> Server Running at http://localhost:${port}`);
})