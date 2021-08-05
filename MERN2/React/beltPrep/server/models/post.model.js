
const mongoose = require("mongoose");

/* 
{PATH} will be replaced with the field name, such as "location".
*/
const PostSchemea = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    description: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    primaryCategory:{
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    secondaryCategory:{
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    imgUrl: {
        type: String,
        required: [true, "{PATH} is required."],
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    },
    { timestamps: true }
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Post = mongoose.model("Post", PostSchemea);
module.exports = Post;