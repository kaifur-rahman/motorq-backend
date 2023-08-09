import express from "express";
//configuring router
const router=express.Router();

//importing controller
import * as userController from "../controllers/users.js";

router.get("/",userController.homee);
router.post("/login",userController.loginUser);
router.post("/create",userController.createUser);

export default router;