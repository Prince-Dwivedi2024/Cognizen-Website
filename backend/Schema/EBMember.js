const mongoose = require('mongoose');

const ebMemberSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
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
    XId:{
        type:String
    },
    achievements: {
        type: [String]
    },
    passingBatch:{
        type: String,
    },
    position:{
        default: "Member",
        type: String,
        required: true
    },
});

module.exports = mongoose.model("EBMember", ebMemberSchema);
