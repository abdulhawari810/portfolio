import express from "express";
import {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controllers.js";

const CategoryRouter = express.Router();

CategoryRouter.get("/", getCategory);
CategoryRouter.post("/create", createCategory);
CategoryRouter.patch("/update/:uuid", updateCategory);
CategoryRouter.delete("/delete/:uuid", deleteCategory);

export default CategoryRouter;
