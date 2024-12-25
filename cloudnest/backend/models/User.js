const mongoose =require('mongoose');
//creating a user schema
const {Schema}=mongoose;
const UserSchema = new Schema({
    //user schema 
    name:{
        type:String,
        required:true
    },
    email:{
        //making email unique
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        //default date
        type:Date,
        default:Date.now
    }
  });
//exporting the user schema
const user=mongoose.model('user',UserSchema);
module.exports=user;