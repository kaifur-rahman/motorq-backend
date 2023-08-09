import mongoose from "mongoose";
//creating schema
const requestSchema=new mongoose.Schema({
    workflowid:{type:String,required:true},
    userid:{type:String,required:true},
    firstname:{type:String},
    lastname:{type:String},
    startdate:{type:String},
    enddate:{type:String},
    amount:{type:String},
    description:{type:String},
    status:{type:String},
    justificationReq:{type:String},
    justyfyvalue:{type:String},
    timeStamp:{type:String},
});
//exporting  user mongodb model 
export default mongoose.model("request",requestSchema);