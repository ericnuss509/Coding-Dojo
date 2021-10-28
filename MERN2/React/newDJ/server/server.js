const express = require("express");
const cors = require("cors");

// Environment vars.
const port = 5000;
const db="Dj-Biz";

// Immediately execute the import mongoose.config.js function.
require("./config/mongoose.config")(db);

const app = express();

// req.body undefined without this!
app.use(express.json());
app.use(cors());

require("./routes/dj.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
