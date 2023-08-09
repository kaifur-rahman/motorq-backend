import mongoose from "mongoose";
//creating schema
const workflowSchema=new mongoose.Schema({
    title:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    startdate:{type:String,required:true},
    enddate:{type:String,required:true},
    amount:{type:String,required:true},
    amitsharma:{type:String,required:true},
    priyaverma:{type:String,required:true},
    description:{type:String,required:true},
});
//exporting  user mongodb model 
export default mongoose.model("Workflow",workflowSchema);