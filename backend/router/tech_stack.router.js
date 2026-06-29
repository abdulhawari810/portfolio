import express from "express";
import { getTechStack } from "../controllers/tech_stack.controllers.js";

const TechStackRouter = express.Router();

TechStackRouter.get("/", getTechStack);

export default TechStackRouter;
