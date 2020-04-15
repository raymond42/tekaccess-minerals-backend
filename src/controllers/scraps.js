import { config } from "dotenv";
import { Scrap } from "../sequelize/models";

config();

class scrapsController {
  static async getAllScraps(req, res) {
    try {
      const scraps = await Scrap.findAll();
      res.status(200).json({
        message: `${scraps.length} scrap(s) found`,
        data: scraps
      });
    } catch (error) {
      throw error;
    }
  }

  static async getSingleScrap(req, res) {
    const scrapId = req.params.id;
    try {
      const scrap = await Scrap.findOne({ where: { id: scrapId } });
      res.status(200).json({
        message: `${scrap.name} is successful retrieved`,
        data: scrap
      });
    } catch (error) {
      throw error;
    }
  }
}

export default scrapsController;
