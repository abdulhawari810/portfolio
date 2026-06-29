import express from "express";
import { getDatabase } from "../controllers/database.controllers.js";

const DatabaseRouter = express.Router();

DatabaseRouter.get("/", getDatabase);

export default DatabaseRouter;
