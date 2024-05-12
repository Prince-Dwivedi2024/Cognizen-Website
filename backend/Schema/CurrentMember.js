const mongoose = require('mongoose');

const currentMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo:{
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mediumId:{
        type: String
    },
    instagramID:{
        type:String
    },
    articles:{
        type: [String] 
    },
});

module.exports = mongoose.model("CurrentMember", currentMemberSchema);
