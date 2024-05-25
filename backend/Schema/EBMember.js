import mongoose from 'mongoose';

const EBMemberSchema = new mongoose.Schema({
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

const EBMember = mongoose.model("EBMember", EBMemberSchema);

export default EBMember;
