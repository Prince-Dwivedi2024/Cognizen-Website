const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./db/config');
const PORT = 5000;
const Admin = require('./Schema/Admin');
const Article = require('./Schema/Article');
const CurrentMember = require('./Schema/CurrentMember');
const EBMember = require('./Schema/EBMember');
const PastMember = require('./Schema/PastMember');
const app = express();
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2; // Use 'cloudinary' package correctly
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true // Ensures secure URLs are used
});

const Jwt = require('jsonwebtoken');
const jwtkey = 'cognizen';
app.use(express.json());

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"]
};

app.use(cors(corsOptions));

app.use(fileUpload({
    useTempFiles: true
}));

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
app.post("/login", async (req, res) => {
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
        const memberType = req.query.type;

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
        case "CurrentMember":
            return CurrentMember;
        case "PastMember":
            return PastMember;
        case "EBMember":
            return EBMember;
        default:
            throw new Error("Invalid member type");
    }
}

//create article
app.post('/article', async (req, res) => {
    const file = req.files.photo;
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath);

        const newArticle = new Article({
            ...req.body,
            photo: result.secure_url, // Ensure secure URL is used
            id: generateRandomCode() // Assign random ID
        });

        await newArticle.save();
        res.status(200).send({ message: "Image uploaded and article created successfully" });

        //logic to push article title to author articles array
        res.status(200).send({ message: "article title pushed to author articles array" });

    } catch (error) {
        console.error("Error uploading image and creating article:", error);
        res.status(500).send({ message: "Something went wrong" });
    }
});

//render article
//delete article
//update article


//create achievement
//render achievement
//delete achievement

//create notice
//delete notice
//render notice



function generateRandomCode(length = 10) {
    const chars = '0123456789abcdefabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});