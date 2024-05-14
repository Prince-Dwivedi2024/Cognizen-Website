const mongoose = require('mongoose');

const pastMemberSchema = new mongoose.Schema({
    id:{
        type: String,
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
        default: "Ex-Member",
        type: String,
        required: true
    },
});

module.exports = mongoose.model("PastMember", pastMemberSchema);
