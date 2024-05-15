const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    publishDate:{
        type:String,
        required:True
    },
    content: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Article", articleSchema);