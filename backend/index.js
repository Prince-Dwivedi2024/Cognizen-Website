import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import './db/config.js';
import Admin from './Schema/Admin.js';
import Article from './Schema/Article.js';
import ArchieveArticle from './Schema/ArchieveArticle.js';
import CurrentMember from './Schema/CurrentMember.js';
import EBMember from './Schema/EBMember.js';
import PastMember from './Schema/PastMember.js';
import Achievement from './Schema/Achievement.js';
import Notice from './Schema/Notice.js';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import { config as dotenvConfig } from 'dotenv';
import Jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenvConfig();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
};
app.use(cors(corsOptions));

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true // Ensures secure URLs are used
});

const jwtkey = 'cognizen';
app.use(express.json());

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'tmp') // Temporary directory for file uploads
}));

app.get('/', async (req, resp) => {
    resp.send({ result: "properly integrated" });
});

// Admin signup API
app.post('/register', async (req, res) => {
    try {
        const user = new Admin(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
                return res.status(500).send({ result: "something went wrong" });
            }
            res.send({ result, auth: token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Something went wrong" });
    }
});

// Admin login API
app.post('/login', async (req, res) => {
    try {
        const { userID, password } = req.body;
        if (!userID || !password) {
            return res.status(400).send({ error: "User ID and password are required" });
        }

        const result = await Admin.findOne({ userID });
        if (!result || result.password !== password) {
            return res.status(401).send({ error: "Invalid user or password" });
        }

        const token = Jwt.sign({ user: result }, jwtkey, { expiresIn: "2h" });
        res.send({ result, auth: token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Something went wrong" });
    }
});

// Upload member details with image
app.post('/upload', async (req, res) => {
    if (!req.files || !req.files.photo) {
        return res.status(400).send({ message: "No file uploaded" });
    }

    const file = req.files.photo;
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath);
        const Item = getItemModel(req.body.type);

        const newMember = new Item({
            ...req.body,
            photo: result.secure_url, // Ensure secure URL is used
            id: generateRandomCode() // Assign random ID
        });

        await newMember.save();
        res.status(200).send({ message: "Image uploaded and member created successfully" });
    } catch (error) {
        console.error("Error uploading image and creating member:", error);
        res.status(500).send({ message: "Something went wrong" });
    } finally {
        // Clean up temp files
        fs.unlinkSync(file.tempFilePath);
    }
});

// Get member profile
app.get("/members", async (req, res) => {
    try {
        const Item = getItemModel(req.query.type);
        const members = await Item.find();
        res.send(members.length > 0 ? members : { result: "no members found" });
    } catch (error) {
        console.error("Error fetching members:", error);
        res.status(500).send({ error: "Something went wrong" });
    }
});

// Get member by id
app.get('/member/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let item = null;

        item = await CurrentMember.findOne({ id });
        if (!item) {
            item = await PastMember.findOne({ id });
        }
        if (!item) {
            item = await EBMember.findOne({ id });
        }

        if (!item) {
            return res.status(404).send({ error: "Item not found" });
        }

        res.status(200).send(item);
    } catch (error) {
        console.error("Error fetching item:", error);
        res.status(500).send({ error: "Something went wrong" });
    }
});


// Update member profile
app.put("/update/:id", async (req, res) => {
    try {
        const memberId = req.params.id;
        const updateFields = req.body;

        const ItemModel = getItemModel(req.body.type);

        // Find the member by custom ID
        const member = await ItemModel.findOne({ id: memberId });

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        // Check if there is a new photo to upload
        if (req.files && req.files.photo) {
            // Upload new photo to Cloudinary
            const result = await cloudinary.uploader.upload(req.files.photo.tempFilePath);

            // Delete the old photo from Cloudinary
            if (member.photo) {
                const publicId = member.photo.split('/').pop().split('.')[0]; // Assuming the URL structure allows this extraction
                await cloudinary.uploader.destroy(publicId);
            }

            // Update the photo field in updateFields
            updateFields.photo = result.secure_url;
        }

        // Update the member with new details
        const updatedMember = await ItemModel.findOneAndUpdate({ id: memberId }, updateFields, { new: true });

        res.status(200).json({ message: "Member updated successfully", member: updatedMember });
    } catch (error) {
        console.error("Error updating member:", error);
        res.status(500).json({ message: "Error updating member" });
    }
});

// Delete member profile
app.delete("/delete/:id", async (req, res) => {
    try {
        const memberId = req.params.id;
        const memberType = req.body.type;

        const Item = getItemModel(memberType);

        // Find the member by custom ID
        const member = await Item.findOne({ id: memberId });
        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        // Delete the photo from Cloudinary if it exists
        if (member.photo) {
            // Extract public ID from the photo URL
            const publicId = member.photo.split('/').pop().split('.')[0]; // Assuming the URL structure allows this extraction
            await cloudinary.uploader.destroy(publicId);
        }

        // Delete the member from the database
        await Item.deleteOne({ id: memberId });
        res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
        console.error("Error deleting member:", error);
        res.status(500).json({ message: "Error deleting member" });
    }
});

function getItemModel(type) {
    switch (type) {
        case "currentMember":
            return CurrentMember;
        case "pastMember":
            return PastMember;
        case "eBMember":
            return EBMember;
        default:
            throw new Error("Invalid member type");
    }
}




//create article
app.post('/article', async (req, res) => {
    try {
        console.log("Received content:", req.body.content);
        // Check if both photo files are present
        if (!req.files.photo1 || !req.files.photo2) {
            return res.status(400).send({ message: "Both photo1 and photo2 are required" });
        }

        // Upload both photos to Cloudinary
        const result1 = await cloudinary.uploader.upload(req.files.photo1.tempFilePath);
        const result2 = await cloudinary.uploader.upload(req.files.photo2.tempFilePath);

        // Parse author and authorId from JSON strings
        const authors = JSON.parse(req.body.author);
        const authorIds = JSON.parse(req.body.authorId);

        let Item;
        if (req.body.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        // Create a new article with both photo URLs
        const newArticle = new Item({
            ...req.body,
            author: authors,
            authorId: authorIds,
            photo1: result1.secure_url, // First photo URL
            photo2: result2.secure_url, // Second photo URL
            id: generateRandomCode() // Assign random ID
        });

        await newArticle.save();
        res.status(200).send({ message: "Images uploaded and article created successfully" });
    } catch (error) {
        console.error("Error uploading images and creating article:", error);
        res.status(500).send({ message: "Something went wrong" });
    }
});


// Search article by id
app.get('/article/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const type = req.query.type;

        let item;
        if (type === 'Article') {
            item = await Article.findOne({ id });
        }
        else {
            item = await ArchieveArticle.findOne({ id });
        }

        if (!item) {
            return res.status(404).send({ error: "Item not found" });
        }

        res.status(200).send(item);
    } catch (error) {
        console.error("Error fetching item:", error);
        res.status(500).send({ error: "Something went wrong" });
    }
});

app.get("/search/:key", async (req, resp) => {
    try {
        const searchKey = req.params.key;
        let result = await Article.find({
            "$or": [
                { title: { $regex: searchKey, $options: 'i' } },
                { publishDate: { $regex: searchKey, $options: 'i' } },
                { category: { $regex: searchKey, $options: 'i' } },
                { topic: { $regex: searchKey, $options: 'i' } },
                { author: { $elemMatch: { $regex: searchKey, $options: 'i' } } },
                { specialCategorisation: { $elemMatch: { $regex: searchKey, $options: 'i' } } },
            ]
        });
        resp.send(result);
    }
    catch (e) {
        console.log(e);
        resp.status(500).send("Internal Server Error");
    }
});



// Render all articles
app.get('/getarticle', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find();

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});


// render only philoneist articles
app.get('/getphiloneist', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find({ category: "Philoneist" });

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// render only reviews articles
app.get('/getreviews', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find({ category: "Reviews" });

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// render only opinion articles
app.get('/getopinion', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find({ category: "Opinion" });

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// render only history articles
app.get('/gethistory', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find({ topic: "History" });

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// render only world articles
app.get('/getinternational', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find({ category: "International" });

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// render only politics articles
app.get('/getpolitics', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find({ topic: "Politics" });

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// render only economics articles
app.get('/geteconomics', async (req, res) => {
    try {
        let Item;

        if (req.query.type === "Article") {
            Item = Article;
        } else {
            Item = ArchieveArticle;
        }

        const articles = await Item.find({ topic: "Economics" });

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found" });
        }

        res.status(200).json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});



// Delete article by ID
app.delete('/deletearticle/:id', async (req, res) => {
    try {
        const articleId = req.params.id;
        let Item;
        let article;

        // Find the article by its custom ID
        const article1 = await Article.findOne({ id: articleId });
        const article2 = await ArchieveArticle.findOne({ id: articleId });

        if (article1) {
            Item = Article;
            article = article1;
        } else if (article2) {
            Item = ArchieveArticle;
            article = article2;
        } else {
            return res.status(404).json({ message: "Article not found" });
        }

        // Extract public IDs from the photo URLs and delete the photos from Cloudinary
        const photos = [article.photo1, article.photo2];
        for (const photoUrl of photos) {
            if (photoUrl) {
                const publicId = photoUrl.split('/').pop().split('.')[0];
                await cloudinary.uploader.destroy(publicId);
            }
        }

        // Delete the article from the database
        await Item.deleteOne({ id: articleId });

        res.status(200).json({ message: "Article and associated photos deleted successfully" });
    } catch (error) {
        console.error("Error deleting article:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});


// Update article for special categorisation
app.put('/categorisation/:id', async (req, res) => {
    try {
        const articleId = req.params.id;
        const { specialCategorisation } = req.body;

        if (!Array.isArray(specialCategorisation)) {
            return res.status(400).send({ message: "specialCategorisation must be an array" });
        }

        const article = await Article.findOne({ id: articleId });

        if (!article) {
            return res.status(404).send({ message: "Article not found" });
        }

        article.specialCategorisation = specialCategorisation;
        await article.save();

        res.status(200).send({ message: "Article categorisation updated successfully", article });
    } catch (error) {
        console.error("Error updating article categorisation:", error);
        res.status(500).send({ message: "Something went wrong" });
    }
});

//create achievement
app.post('/achievement', async (req, res) => {
    const file = req.files.photo;
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath);

        // Parse achiever and achieverId from JSON strings
        const achievers = JSON.parse(req.body.achiever);
        const achieverIds = JSON.parse(req.body.achieverId);

        const newAchievement = new Achievement({
            ...req.body,
            achiever: achievers,
            achieverId: achieverIds,
            photo: result.secure_url, // Ensure secure URL is used
            id: generateRandomCode() // Assign random ID
        });

        await newAchievement.save();
        res.status(200).send({ message: "Image uploaded and achievement created successfully" });
    } catch (error) {
        console.error("Error uploading image and creating achievement:", error);
        res.status(500).send({ message: "Something went wrong" });
    }
});

//render all achievements
app.get('/getachievement', async (req, res) => {
    try {
        const achievement = await Achievement.find();

        res.status(200).json(achievement);
    } catch (error) {
        console.error("Error fetching achievements:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

//delete achievement by ID
app.delete('/deleteachievement/:id', async (req, res) => {
    try {
        const achievementId = req.params.id;

        // Find the achievement by its custom ID
        const achievement = await Achievement.findOne({ id: achievementId });

        if (!achievement) {
            return res.status(404).json({ message: "Article not found" });
        }

        // Extract public ID from the photo URL
        if (achievement.photo) {
            const photoUrl = achievement.photo;
            const publicId = photoUrl.split('/').pop().split('.')[0];

            // Delete the photo from Cloudinary
            await cloudinary.uploader.destroy(publicId);
        }

        // Delete the article from the database
        await Achievement.deleteOne({ id: achievementId });

        res.status(200).json({ message: "achievement and associated photo deleted successfully" });
    } catch (error) {
        console.error("Error deleting achievement:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});




//create notice
app.post('/notice', async (req, res) => {
    const file = req.files.photo;
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath);

        const newNotice = new Notice({
            ...req.body,
            photo: result.secure_url, // Ensure secure URL is used
            id: generateRandomCode() // Assign random ID
        });

        await newNotice.save();
        res.status(200).send({ message: "Image uploaded and notice created successfully" });
    } catch (error) {
        console.error("Error uploading image and creating notice:", error);
        res.status(500).send({ message: "Something went wrong" });
    }
});

//render all notices
app.get('/getnotice', async (req, res) => {
    try {
        const notices = await Notice.find();

        res.status(200).json(notices);
    } catch (error) {
        console.error("Error fetching notices:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

//delete notice by ID
app.delete('/deletenotice/:id', async (req, res) => {
    try {
        const noticeId = req.params.id;

        // Find the article by its custom ID
        const notice = await Notice.findOne({ id: noticeId });

        if (!notice) {
            return res.status(404).json({ message: "notice not found" });
        }

        // Extract public ID from the photo URL
        if (notice.photo) {
            const photoUrl = notice.photo;
            const publicId = photoUrl.split('/').pop().split('.')[0];

            // Delete the photo from Cloudinary
            await cloudinary.uploader.destroy(publicId);
        }

        // Delete the article from the database
        await Notice.deleteOne({ id: noticeId });

        res.status(200).json({ message: "notice and associated photo deleted successfully" });
    } catch (error) {
        console.error("Error deleting notice:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});






function generateRandomCode(length = 10) {
    const chars = '0123456789abcdefabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
