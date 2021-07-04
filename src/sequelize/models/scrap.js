module.exports = (sequelize, DataTypes) => {
  const Scrap = sequelize.define(
    "Scrap",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
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
  return Scrap;
};
