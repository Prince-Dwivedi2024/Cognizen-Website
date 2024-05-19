const mongoose = require('mongoose');

const pastMemberSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: "pastMember",
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
    phone:{
        type:String,
        required:true,
        unique:true
    },
    mediumId:{
        type: String
    },
    instagramId:{
        type:String
    },
    achievements: {
        type: [String]
    },
    passingBatch:{
        type: String,
    },
    position:{
        default: "Alumni",
        type: String,
        required: true
    },
});

module.exports = mongoose.model("PastMember", pastMemberSchema);
