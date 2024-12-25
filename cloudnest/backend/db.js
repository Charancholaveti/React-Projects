const mongoose= require('mongoose');
const mongoURI ="mongodb://localhost:27017/myDatabase";
const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected Successfullly")).catch((e)=>console.log(e.message))
}
module.exports = connectToMongo;
