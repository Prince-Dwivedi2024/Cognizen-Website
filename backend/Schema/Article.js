import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    id: {
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
    publishDate: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true, // philoneist || opinion || others 
    },
    topic: {
        type: String,
        required: true, // education || environment || politics
    },
    author: {
        type: [String],
        required: true,
    },
    authorId: { // Updated field name
        type: [String],
        required: true
    },
    photo: {
        type: String,
        required: true,
    },
    specialCategorisation: {          //categorisation as "author's pick","trending","must read","featured"...
        type: [String]
    },
    type: {
        type: String,
        default: "Article",
        required: true
    }
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
