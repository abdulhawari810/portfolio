import express from "express";
import { getUsers } from "../controllers/users.controllers.js";

const UsersRouter = express.Router();

UsersRouter.get("/", getUsers);

export default UsersRouter;
