const mongoose = require('mongoose');

const ebMemberSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "eBMember",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    photo:{
        type: String,
    },
    email: {
        type: String,
        required:true,
        unique: true,
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
    achievements: {
        type: [String]
    },
    passingBatch:{
        type: String,
        required: true
    },
    position:{
        default: "Member",
        type: String,
        required: true
    },
});

module.exports = mongoose.model("EBMember", ebMemberSchema);