//importing dependencies
import mongoose from "mongoose";
//importing models
import userSchema from "../models/users.js";

//controllers

//home
function homee(req,res){
    res.send("Welcome to home route of users");
}
//login
async function loginUser(req,res){
    var uname=req.body.username;
    var pass=req.body.password;
    try{
      const findingUser=await userSchema.findOne({username:uname});
      if(findingUser!=null){
        //user exists

        //now we have to check given and stored password
        // Load DB.
        if(findingUser.password===pass){
            res.send({status:"Login success",userType:findingUser.role,userId:findingUser._id});
        }else if(findingUser.password!=pass){
            res.send({status:"Invalid Password"});
        }
      }else{
        res.send({status:"No user exist with given username"});
      }
    }catch(err){
      res.send("Error in finding user by username in db: "+err);
    }
  }
//create
function createUser(req,res){
    var fName=req.body.firstName;
    var lName=req.body.lastName;
    var uName=req.body.userName;
    var pass=req.body.password;
    var rolee=req.body.role;
      try{
        const saved= new userSchema({firstname:fName,lastname:lName,username:uName,password:pass,role:rolee});
        try{
          saved.save();
          res.send("User created");
        }catch(err){
          res.send("Error in saving new user in database "+err);
        }
  
      }catch(err){
        res.send("Error in creating admin: "+err);
      }
}
export {homee,loginUser,createUser};