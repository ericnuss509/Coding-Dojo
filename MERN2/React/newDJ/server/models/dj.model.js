
const mongoose = require("mongoose");

/* 
{PATH} will be replaced with the field name, such as "location".
*/
const DjSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
            message: "Please enter a valid email"
        
    },
    help: {
        type: String,
        required: [true, "Message is required"],
        minlength: [8, "Message must be 8 characters or longer"]
    }

}, { timestamps: true });



/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Dj = mongoose.model("Dj", DjSchema);
module.exports = Dj;