const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Article", articleSchema);