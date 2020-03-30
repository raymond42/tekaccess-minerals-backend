import express from "express";
import ProductsController from "../controllers/products";

const productsRouter = express.Router();

productsRouter.get("/products", ProductsController.getAllProducts);
productsRouter.get("/products/:id", ProductsController.getSingleProduct);

export default productsRouter;
