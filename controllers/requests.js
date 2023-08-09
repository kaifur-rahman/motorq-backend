//importing dependencies
import mongoose from "mongoose";
//importing models
import requestSchema from "../models/requests.js";
import workflowSchema from "../models/workflows.js";

//controllers

//home
function homee(req,res){
    res.send("Welcome to home route of requests");
}
//login
async function getRequest(req,res){
    res.send("Here are all requests")
  }
//create
function createRequest(req,res){
    var request={
      workflowid:req.body.wid,
      userid:req.body.uid,
      firstname:req.body.fname,
      lastname:req.body.lname,
      startdate:req.body.sdate,
      enddate:req.body.edate,
      amount:req.body.amt,
      description:req.body.desc,
      status:"Applied",
      justificationReq:"false",
      justyfyvalue:"",
      timeStamp:"",
    } 
    try{
      const saved= new requestSchema(request);
      try{
        saved.save();
        res.send("Request applied");
      }catch(err){
        res.send("Error in saving new request in database "+err);
      }

    }catch(err){
      res.send("Error in applying request: "+err);
    }
}

//fetch request on basis of approver
async function getRequests(req,res){
  //first 
  //check uid is of which approver
  var requestsData=[];
    if(req.body.uid=="64d2ad748613c50973330b10"){
    //amit sharma

    //get all workflows where amitsharma true
    try{
      const workflows=await workflowSchema.find({amitsharma:"true"});
      //for each _id in workflows find the workflowid in request schema and push that request to requestsData
      for (const workflow of workflows) {
        const workflowId = workflow._id;
    
        // Find requests associated with the workflowId
        const requests = await requestSchema.find({ workflowid: workflowId });
    
        // Push the requests to the requestsData array
        requestsData.push(...requests);
      }
      //sending requests
      res.send(requestsData);
    
    }catch(err){
      res.send("Error in fetching requests for amit sharma "+err);
    }  


  }else if(req.body.uid=="64d2ad8d8613c50973330b12"){
        //send all those requests where priyaverma=true
    try{
      const workflows=await workflowSchema.find({priyaverma:"true"});
      //for each _id in workflows find the workflowid in request schema and push that request to requestsData
      for (const workflow of workflows) {
        const workflowId = workflow._id;
    
        // Find requests associated with the workflowId
        const requests = await requestSchema.find({ workflowid: workflowId });
    
        // Push the requests to the requestsData array
        requestsData.push(...requests);
      }
      //sending requests
      res.send(requestsData);
    
    }catch(err){
      res.send("Error in fetching requests for amit sharma "+err);
    }  
  }else{
    res.send("no such approver found");
  }
}
//to approve request
function approve(req,res){
  var id=req.body.reqid;
  //find request with id and update its status
  requestSchema.findOneAndUpdate({_id:id}, {status:"Approved"})
  .then(updatedDocument => {
    if (updatedDocument) {
      res.send("Approved")
    } else {
      res.send("Request not found");
    }
  })
  .catch(error => {
    console.error('Error approving document:', error);
  });
}
//to reject request
function reject(req,res){
  var id=req.body.reqid;
  //find request with id and update its status
  requestSchema.findOneAndUpdate({_id:id}, {status:"Rejected"})
  .then(updatedDocument => {
    if (updatedDocument) {
      res.send("Rejected")
    } else {
      res.send("Request not found");
    }
  })
  .catch(error => {
    console.error('Error approving document:', error);
  });
}
//request history
async function reqHistory(req,res){
  var id=req.body.uid;
  console.log(id)
  //find request with id and update its status
  try{
    const history=await requestSchema.find({userid:id})
    res.send(history);
  }catch(err){
    res.send('Error in fetching request history');
  }
}



export {homee,getRequests,createRequest,approve,reject,reqHistory};