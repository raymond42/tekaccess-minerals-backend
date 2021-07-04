module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING
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
  Category.associate = models => {
    Category.hasMany(models.Product, {
      foreignKey: "productCategory",
      onDelete: "CASCADE"
    });
  };
  return Category;
};
