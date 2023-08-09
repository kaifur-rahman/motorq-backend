import mongoose from "mongoose";
//creating schema
const userSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String},
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
});
//exporting  user mongodb model 
export default mongoose.model("User",userSchema);