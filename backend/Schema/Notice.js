import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
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
    photo: {
        type: String,
        required: true,
    },
});

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;
