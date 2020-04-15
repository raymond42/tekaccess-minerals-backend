import { config } from "dotenv";
import { Product } from "../sequelize/models";

config();

class ProductsController {
  static async getAllProducts(req, res) {
    const category=req.params.productCategory;
    try {
      const products = await Product.findAll({where: { productCategory: category}});
      res.status(200).json({
        message: `${products.length} product(s) found`,
        data: products
      });
    } catch (error) {
      throw error;
    }
  }

  static async getSingleProduct(req, res) {
    const productId = req.params.id;
    try {
      const product = await Product.findOne({ where: { id: productId } });
      res.status(200).json({
        message: `${product.productName} is successful retrieved`,
        data: product
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsController;
