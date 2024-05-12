const express = require('express');
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
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
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

//admin signup api
app.post('/register', async (req, resp) => {
    try {

        const user = new Admin(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
                resp.send({ result: "something went wrong" })
            }
            resp.send({ result, auth: token });
        })
    }
    catch (error) {
        console.error(error);
        resp.status(500).send({ error: "Something went wrong" });
    }
});

//admin login api
app.post("/login", async (req, resp) => {
    try {
        if (!req.body.userID || !req.body.password) {
            return resp.status(400).send({ error: "User ID and password are required" });
        }

        const result = await Admin.findOne({ userID: req.body.userID });
        if (!result) {
            return resp.status(401).send({ error: "Invalid user" });
        }

        if (result.password !== req.body.password) {
            return resp.status(401).send({ error: "Invalid password" });
        }

        const token = Jwt.sign({ user: result }, jwtkey, { expiresIn: "2h" });

        resp.send({ result, auth: token });
    }
    catch (error) {
        console.error(error);
        resp.status(500).send({ error: "Something went wrong" });
    }
});

//upload member details with image 
app.post('/upload', async (req, res) => {
    const file = req.files.photo;
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath);
        let Item;
        if (req.body.type === "currentMember") {
            Item = CurrentMember;
        }
        else if (req.body.type === "pastMember") {
            Item = PastMember;
        }
        else {
            Item = EBMember;
        }
        const newMember = new Item({
            type: req.body.type,
            name: req.body.name,
            photo: result.url,
            email: req.body.email,
            mediumId: req.body.mediumId,
            instagramID: req.body.instagramID,
            articles: req.body.articles,
            achievements: req.body.achievements,
            passingBatch: req.body.passingBatch,
            position: req.body.position
        });
        await newMember.save();
        res.status(200).send({ message: "Image uploaded and member created successfully" });
    } catch (error) {
        console.error("Error uploading image and creating member:", error);
        res.status(500).send({ message: "something went wrong" });
    }
});

//member profile rendering api
app.get("/members", async (req, resp) => {
    try {
        let Item;
        if (req.query.type === "currentMember") {
            Item = CurrentMember;
        }
        else if (req.query.type === "pastMember") {
            Item = PastMember;
        }
        else {
            Item = EBMember;
        }
        let members = await Item.find();     //finds all members
        if (members.length > 0) {
            resp.send(members);
        }
        else {
            resp.send({ result: "no members found" });
        }
    } catch (error) {
        console.error("Error fetching members:", error);
        resp.status(500).send({ error: "Something went wrong" });
    }
});

// member profile update api
app.put("/update/:id", async (req, res) => {
    try {

        let Item;
        if (req.body.type === "currentMember") {
            Item = CurrentMember;
        } else if (req.body.type === "pastMember") {
            Item = PastMember;
        } else {
            Item = EBMember;
        }

        const member = await Item.findById(req.params.id);
        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        // Update member fields
        for (const key in req.body) {
            if (Object.hasOwnProperty.call(req.body, key)) {
                if (key === 'photo') {
                    // Delete previous photo
                    if (member.photo) {
                        await cloudinary.uploader.destroy(member.photo.substring(member.photo.lastIndexOf("/") + 1));
                    }
                    // Handle photo update
                    const file = req.files.photo;
                    const result = await cloudinary.uploader.upload(file.tempFilePath);
                    member.photo = result.url;
                } else {
                    // Update other fields
                    member[key] = req.body[key];
                }
            }
        }

        // Save updated member details
        const updatedMember = await member.save();
        res.status(200).json({ message: "Member updated successfully", member: updatedMember });
    } catch (error) {
        console.error("Error updating member:", error);
        res.status(500).json({ message: "Error updating member" });
    }
});

// member profile delete api
app.delete("/delete/:id", async (req, res) => {
    try {
        let Item;
        if (req.query.type === "currentMember") {
            Item = CurrentMember;
        } else if (req.query.type === "pastMember") {
            Item = PastMember;
        } else {
            Item = EBMember;
        }

        const member = await Item.findById(req.params.id);
        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        // Delete member photo from Cloudinary if it exists
        if (member.photo) {
            await cloudinary.uploader.destroy(member.photo.substring(member.photo.lastIndexOf("/") + 1));
        }

        // Delete the member from the database
        await Item.deleteOne({ _id: req.params.id });

        res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
        console.error("Error deleting member:", error);
        res.status(500).json({ message: "Error deleting member" });
    }
});



//search api
// app.get("/search/:key", async (req, resp) => {
//     let Item;
//     if (req.query.type === "product") {
//         Item = Product;
//     }
//     else {
//         Item = DummyProduct;
//     }
//     let result = await Item.find({
//         "$or": [
//             { name: { $regex: req.params.key } },
//             { ratings: { $regex: req.params.key } },         //can search in all listed fields
//             { category: { $regex: req.params.key } },
//             { price: { $regex: req.params.key } },
//             { restaurant: { $regex: req.params.key } }
//         ]
//     });
//     resp.send(result);
// })

//delete api
// app.delete("/delete/:id", async (req, resp) => {
//     try {
//         const product = await DummyProduct.findById(req.params.id);

//         if (!product) {
//             return resp.status(404).json({ message: "Product not found" });
//         }

//         const result = await DummyProduct.deleteOne({ _id: req.params.id });

//         if (result.deletedCount > 0) {

//             const imageUrl = product.photo;
//             await cloudinary.uploader.destroy(imageUrl);

//             resp.status(200).json({ message: "Product deleted successfully" });
//         } else {
//             resp.status(404).json({ message: "Product not found" });
//         }
//     } catch (error) {
//         console.error(error);
//         resp.status(500).json({ message: "Error deleting product" });
//     }
// });

app.get("/", (req, resp) => {
    resp.send("server is running");
})

app.listen(PORT);