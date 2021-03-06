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
        type: DataTypes.STRING
      },
      description2: {
        allowNull: true,
        type: DataTypes.STRING
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
      },
      image2: {
        allowNull: true,
        type: DataTypes.STRING
      },
      image3: {
        allowNull: true,
        type: DataTypes.STRING
      },
      image4: {
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
