const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
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
    achievers: {
        type: [String],
        required: true,
    },
    achieverId:{                 //needed for achiever ID based achievement rendering
        type:[String],
        required:true
    },
    photo: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Achievement", achievementSchema);