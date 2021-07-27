const express = require("express");
const cors = require("cors");

// Environment vars.
const port = 5000;
const db_name = "LoginReg";

// Immediately execute the import mongoose.config.js function.
require("./config/mongoose.config")(db_name);

const app = express();

// req.body undefined without this!
app.use(express.json());
app.use(cors());

require("./routes/user.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
