const User = require("../models/user.model");

// Export an object that is full of methods.
module.exports = {
    // long-form - key: value format
    create: function (req, res) {
        console.log("create method executed");

        User.create(req.body)
            .then((user) => {
                // newly created DB model instance
                res.json(user);
            })
            .catch((err) => {
                // This makes the front-end axios .catch get triggered instead of the .then.
                res.status(400).json(err);
            });
    },

    // Shorthand key value pair, key name will be the name of the function and value will be the function.
//     getAll(req, res) {
//         console.log("getAll method executed");

//         User.find()
//             .then((users) => {
//                 res.json(users);
//             })
//             .catch((err) => {
//                 res.json(err);
//             });
//     },

//     getOne(req, res) {
//         console.log("getOne method executed", "url params", req.params);

//         User.findById(req.params.id)
//             .then((user) => {
//                 res.json(user);
//             })
//             .catch((err) => {
//                 res.status(400).json(err);
//             });
//     },

//     delete(req, res) {
//         console.log("delete method executed", "url params", req.params);

//         User.findByIdAndDelete(req.params.id)
//             .then((user) => {
//                 res.json(user);
//             })
//             .catch((err) => {
//                 res.status(400).json(err);
//             });
//     },

//     update(req, res) {
//         console.log("update method executed", "url params:", req.params);

//         User.findByIdAndUpdate(req.params.id, req.body, {
//                 runValidators: true,
//                 new: true, // return the newly updated model
//             })
//             .then((updatedUser) => {
//                 res.json(updatedUser);
//             })
//             .catch((err) => {
//                 res.status(400).json(err);
//             });
//     },
};