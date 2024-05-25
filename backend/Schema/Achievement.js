import mongoose from "mongoose";

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
        required:true
    },
    content: {
        type: String,
        required: true,
    },
    achiever: {
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

const Achievement = mongoose.model("Achievement", achievementSchema);

export default Achievement;
