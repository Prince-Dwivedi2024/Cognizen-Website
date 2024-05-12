const mongoose = require('mongoose');
require('dotenv').config();

const URI = "mongodb+srv://cognizennitr:cognizen@cluster0.xiualzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectDB = async () => {
    try {
        mongoose.connect(URI);
        console.log('Connection successful');
    } catch (error) {
        console.error('Connection failed:', error);
        process.exit(1);
    }
};

connectDB();