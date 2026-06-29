import express from "express";
import { getProject } from "../controllers/project.controllers.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", getProject);

export default ProjectRouter;
