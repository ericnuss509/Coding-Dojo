const Dj = require("../models/dj.model");
const nodemailer = require('nodemailer');
// Export an object that is full of methods.
module.exports = {
    // long-form - key: value format
    create: function (req, res) {
        console.log("create method executed");
        
        // Dj.create(req.body)
        // .then((Dj) => {
        //     // newly created DB model instance
        //     res.json(Dj);
        // })

        // .catch((err) => {
        //     // This makes the front-end axios .catch get triggered instead of the .then.
        //     res.status(400).json(err);
        // });
        const dj = new Dj(req.body);
        console.log(dj.email, "here's the email")
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
            html: 'Subject:' + dj.help + ',' + dj.email,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email Sent:" + info.response);
              company
                .save()
                .then(() => {
                  res.json({ msg: "success!", company: company });
                })
                .catch((err) => res.status(400).json(err));
            }
          }); 
        // module.exports.sendEmail(req, res)
 
    },

    sendEmail(req, res) {
        const dj = Dj.findById(req.params.id);
        console.log(dj.email, 'this is the dj email');
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
            html: dj.help + dj.email,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email Sent:" + info.response);
              company
                .save()
                .then(() => {
                  res.json({ msg: "success!", company: company });
                })
                .catch((err) => res.status(400).json(err));
            }
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