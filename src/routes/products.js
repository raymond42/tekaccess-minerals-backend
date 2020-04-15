import express from "express";
import ProductsController from "../controllers/products";

const productsRouter = express.Router();

productsRouter.get("/categories/products/:productCategory", ProductsController.getAllProducts);
productsRouter.get("/products/:id", ProductsController.getSingleProduct);

export default productsRouter;
