//importing dependencies
import mongoose from "mongoose";
//importing models
import workflowSchema from "../models/workflows.js";

//controllers

//home
function homee(req,res){
    res.send("Welcome to home route of users");
}
//to create new workflow
async function createWorkflow(req,res){
    var title=req.body.title;
    var firstname=req.body.firstName;
    var lastname=req.body.lastName;
    var startdate=req.body.startDate;
    var enddate=req.body.endDate;
    var amount=req.body.amount;
    var amitsharma=req.body.AmitSharma;
    var priyaverma=req.body.PriyaVerma;
    var description=req.body.description;
    try{
        const saved= new workflowSchema({title:title,firstname:firstname,lastname:lastname,startdate:startdate,enddate:enddate,amount:amount,amitsharma:amitsharma,priyaverma:priyaverma,description:description});
        try{
         await saved.save();
          res.send("Workflow created");
        }catch(err){
          res.send("Error in saving new workflow in database "+err);
        }
  
      }catch(err){
        res.send("Error in creating workflow: "+err);
      }
}

//to fetch all workflow
async function getWorkflows(req,res){
    try{
        const data=await workflowSchema.find({});
        res.status(200).send(data);
    }catch(err){
        res.send("Error in fetching teams data from database "+err);
    }
}
export {homee,createWorkflow,getWorkflows};