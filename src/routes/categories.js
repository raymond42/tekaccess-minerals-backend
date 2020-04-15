import express from "express";
import CategoriesController from "../controllers/categories";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories/:id", CategoriesController.getSinglecategory);
categoriesRouter.get("/categories", CategoriesController.getAllCategories);

export default categoriesRouter;
