import mongoose from "mongoose";

const archieveSchema = new mongoose.Schema({
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
        required: true,
    },
    publishDate:{
        type:String,
        required:true
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,        // philoneist || opinion || others 
    },
    topic: {
        type: String,
        required: true,       // education || environment || politics
    },
    author: {
        type: [String],
        required: true,
    },
    authorId:{                 //needed for author ID based article rendering
        type:[String],
        required:true
    },
    photo: {
        type: String,
        required: true,
    },
    type:{
        type:String,
        default:"ArchiveArticle",
        required:true
    }
});

const ArchieveArticle = mongoose.model("ArchieveArticle", archieveSchema);

export default ArchieveArticle;
