const port = 4001;
const express = require("express");
const app  = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// DATAbase connect with mongodb
mongoose.connect("mongodb+srv://Safayat:1514908666@cluster0.usckekc.mongodb.net/ecommerce");

//api creation 

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//image storage engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on Port "+port)
    }
    else{
        console.log("Error: "+error)
    }
})