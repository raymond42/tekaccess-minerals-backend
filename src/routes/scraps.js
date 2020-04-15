import express from "express";
import scrapsController from "../controllers/scraps";

const scrapsRouter = express.Router();

scrapsRouter.get("/scraps", scrapsController.getAllScraps);
scrapsRouter.get("/scraps/:id", scrapsController.getSingleScrap);

export default scrapsRouter;
