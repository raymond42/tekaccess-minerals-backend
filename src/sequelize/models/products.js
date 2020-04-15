module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      productName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description1: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      description2: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      subtitle: {
        allowNull: true,
        type: DataTypes.STRING
      },
      productCategory: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      image: {
        allowNull: true,
        type: DataTypes.STRING
      }
    },
    {
      timeStamps: true
    }
  );
  Product.associate = models => {
    Product.belongsTo(models.Category, {
      foreignKey: "productCategory",
      onDelete: "CASCADE"
    });
  };
  return Product;
};
