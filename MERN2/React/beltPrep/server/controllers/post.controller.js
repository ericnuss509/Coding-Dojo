const Post = require("../models/post.model");

// Export an object that is full of methods.
module.exports = {
    // long-form - key: value format
    create: function (req, res) {
        console.log("create method executed");

        Post.create(req.body)
        .then((post) => {
            // newly created DB model instance
            res.json(post);
        })
        .catch((err) => {
            // This makes the front-end axios .catch get triggered instead of the .then.
            res.status(400).json(err);
        });
    },

    // Shorthand key value pair, key name will be the name of the function and value will be the function.
    getAll(req, res) {
        console.log("getAll method executed");

        Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => {
            res.json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Post.findById(req.params.id)
        .then((post) => {
            res.json(post);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    delete(req, res) {
        console.log("delete method executed", "url params", req.params);

        Post.findByIdAndDelete(req.params.id)
        .then((post) => {
            res.json(post);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Post.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true, // return the newly updated model
        })
        .then((updatedPost) => {
            res.json(updatedPost);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
};