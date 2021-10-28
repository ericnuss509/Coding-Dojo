const mongoose = require("mongoose");

module.exports = (db) => {
    mongoose
        .connect(`mongodb://localhost/${db}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log(`Successfully connected to ${db}`);
        })
        .catch((err) => {
            console.log(`mongoose connection to ${db} failed:`, err);
        });
};