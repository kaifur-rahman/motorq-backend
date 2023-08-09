import express from "express";
//configuring router
const router=express.Router();

//importing controller
import * as requestController from "../controllers/requests.js";

router.get("/",requestController.homee);
router.post("/apply",requestController.createRequest);
router.post("/all",requestController.getRequests);
router.post("/approve",requestController.approve);
router.post("/reject",requestController.reject);
router.post("/history",requestController.reqHistory);

export default router;