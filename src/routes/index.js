import express from "express";
import productsRouter from "./products";

const router = express();

router.use("/", productsRouter);

export default router;
