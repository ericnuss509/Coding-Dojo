const greenHouse = require("../models/greenhouse.model");
const nodemailer = require('nodemailer');
// Export an object that is full of methods.
module.exports = {
    // long-form - key: value format
    create: function (req, res) {
        console.log("create method executed");

        // greenHouse.create(req.body)
        // .then((greenHouse) => {
        //     // newly created DB model instance
        //     res.json(greenHouse);
        // })

        // .catch((err) => {
        //     // This makes the front-end axios .catch get triggered instead of the .then.
        //     res.status(400).json(err);
        // });
        const greenhouse = new greenHouse(req.body);
        console.log(greenhouse.email, "here's the email")
        // console.log(proccess.env.EMAIL, 'BOOM BITCH')
        // console.log(proccess.env.PASSWORD, 'BOOM BITCH')
        var transporter = nodemailer.createTransport({
            
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        var mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Inquire about our services.",
            html: 'Subject:' + greenhouse.help + ',' + greenhouse.email,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email Sent:" + info.response);
                company
                    .save()
                    .then(() => {
                        res.json({
                            msg: "success!",
                            company: company
                        });
                    })
                    .catch((err) => res.status(400).json(err));
            }
        });
        // module.exports.sendEmail(req, res)

    },

    sendEmail(req, res) {
        const greenhouse = greenHouse.findById(req.params.id);
        console.log(greenhouse.email, 'this is the greenhouse email');
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        var mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Inquire about our services.",
            html: greenhouse.help + greenhouse.email,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email Sent:" + info.response);
                company
                    .save()
                    .then(() => {
                        res.json({
                            msg: "success!",
                            company: company
                        });
                    })
                    .catch((err) => res.status(400).json(err));
            }
        });

    },
    // Shorthand key value pair, key name will be the name of the function and value will be the function.
    getAll(req, res) {
        console.log("getAll method executed");

        greenHouse.find()
            .then((greenHouses) => {
                res.json(greenHouses);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        greenHouse.findById(req.params.id)
            .then((greenHouse) => {
                res.json(greenHouse);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        console.log("delete method executed", "url params", req.params);

        greenHouse.findByIdAndDelete(req.params.id)
            .then((greenHouse) => {
                res.json(greenHouse);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        greenHouse.findByIdAndUpdate(req.params.id, req.body, {
                runValidators: true,
                new: true, // return the newly updated model
            })
            .then((updatedgreenHouse) => {
                res.json(updatedgreenHouse);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
};