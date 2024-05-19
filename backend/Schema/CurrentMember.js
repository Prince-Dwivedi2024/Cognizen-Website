const mongoose = require('mongoose');

const currentMemberSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "currentMember",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    mediumId: {
        type: String
    },
    instagramId: {
        type: String
    },
    XId:{
        type:String
    },
    achievements: {
        type: [String]
    },
    passingBatch: {
        type: String,
    },
    position: {
        type: String,
        default: "Member",
        required: true
    }
});

module.exports = mongoose.model("CurrentMember", currentMemberSchema);
