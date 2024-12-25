const mongoose= require('mongoose');
// URI from mondodb atlas
const mongoURI ="mongodb://localhost:27017/myDatabase";
//connection to mongodb
const connectToMongo=()=>{
    //connecting to the database if successfull then log the message
    mongoose.connect(mongoURI).then(()=>console.log("Connected Successfullly")).catch((e)=>console.log(e.message))
}
//exporting the connectMongo function
module.exports = connectToMongo;
