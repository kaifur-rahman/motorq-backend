import * as dotenv from 'dotenv'
dotenv.config()
//importin modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

//configuring app
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cors({
    origin:"*",
}))

const port=4000;

//db conn
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://rahmankaifur8:"+process.env.dbPass+"@cluster0.djeeulu.mongodb.net/?retryWrites=true&w=majority").then(() => console.log('Database Connected!'));

//importing views
import userRoutes from './views/users.js';
import workflowRoutes from "./views/workflows.js";
import requestRoutes from "./views/requests.js";
//routers
app.use("/users",userRoutes); 
app.use("/workflow",workflowRoutes);
app.use("/request",requestRoutes);

//general route
app.get("/",function(req,res){
    res.send("Working");
})
app.listen(port,function(){
    console.log("Server started on port: "+port);
});