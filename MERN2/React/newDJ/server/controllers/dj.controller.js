const Dj = require("../models/Dj.model");

// Export an object that is full of methods.
module.exports = {
    // long-form - key: value format
    create: function (req, res) {
        console.log("create method executed");

        Dj.create(req.body)
        .then((Dj) => {
            // newly created DB model instance
            res.json(Dj);
        })
        .catch((err) => {
            // This makes the front-end axios .catch get triggered instead of the .then.
            res.status(400).json(err);
        });
    },

    // Shorthand key value pair, key name will be the name of the function and value will be the function.
    getAll(req, res) {
        console.log("getAll method executed");

        Dj.find()
        .then((Djs) => {
            res.json(Djs);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Dj.findById(req.params.id)
        .then((Dj) => {
            res.json(Dj);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    delete(req, res) {
        console.log("delete method executed", "url params", req.params);

        Dj.findByIdAndDelete(req.params.id)
        .then((Dj) => {
            res.json(Dj);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Dj.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true, // return the newly updated model
        })
        .then((updatedDj) => {
            res.json(updatedDj);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
};