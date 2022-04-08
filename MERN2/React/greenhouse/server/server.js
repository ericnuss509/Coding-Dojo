require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// Immediately execute the import mongoose.config.js function.
mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);

require("./config/mongoose.config")(process.env.db_name);


const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
// app.use(cors());

require("./routes/greenHouse.routes")(app);

app.listen(process.env.DB_PORT, () =>
    console.log(`Listening on  ${process.env.DB_PORT} for REQuests to RESpond to.`)
);