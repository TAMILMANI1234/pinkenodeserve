const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require("morgan");
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./database");
const camRoutes =require("./routes/camRoutes");
const customerRoutes = require("./routes/customerRoutes");
const camImagesRoutes = require("./routes/getcam_image_Routes");

const PORT = process.env.PORT;

//DB Connections
connectDB();


const app=express();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/cam",camRoutes);
app.use("/api/customer",customerRoutes);
app.use("/api/getimages",camImagesRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running.... @${PORT}`);
})