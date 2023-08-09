import express from "express";
//configuring router
const router=express.Router();

//importing controller
import * as workflowController from "../controllers/workflows.js";

router.get("/",workflowController.homee);
router.post("/create",workflowController.createWorkflow);
router.get("/all",workflowController.getWorkflows);

export default router;