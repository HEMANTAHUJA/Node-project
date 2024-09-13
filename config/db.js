const mongoose = require("mongoose");

const connectDb = async ()=>{
    const connection = await mongoose.connect("mongodb://localhost:27017/technoEcom");
}