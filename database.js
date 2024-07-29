const dotenv=require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Mongo db connected.......`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;