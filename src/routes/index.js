import express from "express";
import productsRouter from "./products";
import categoriesRouter from "./categories";
import scrapsRouter from "./scraps";

const router = express();

router.use("/", productsRouter);
router.use("/", categoriesRouter);
router.use("/", scrapsRouter);

export default router;
