const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://ritivakil3:ritivakil3@cluster0.kgpgxdz.mongodb.net/test";

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
m9NoZWXSZX6yYqVO