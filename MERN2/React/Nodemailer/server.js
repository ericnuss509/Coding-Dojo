require('dotenv').config(); 
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }

});

let mailOptions =  {
    from: 'erictylernuss@gmail.com',
    to: 'ericpennyroyalnies@gmail.com, nardi.8199@gmail.com, garymckinnonak@gmail.com',
    // cc: '',
    // bcc: '',
    subject: 'test test',
    text: 'It works'
};

transporter.sendMail(mailOptions)
    .then(function(response){
        console.log('Email sent');


    })
    .catch(function(error){
        console.log('Error:', error);

    });