import { config } from "dotenv";
import { Category } from "../sequelize/models";

config();

class CategoriesController {
  static async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json({
        message: `${categories.length} category(s) found`,
        data: categories
      });
    } catch (error) {
      throw error;
    }
  }

  static async getSinglecategory(req, res) {
    const categoryId = req.params.id;
    try {
      const category = await Category.findOne({ where: { id: categoryId } });
      res.status(200).json({
        message: `${category.name} is successful retrieved`,
        data: category
      });
    } catch (error) {
      throw error;
    }
  }
}

export default CategoriesController;
