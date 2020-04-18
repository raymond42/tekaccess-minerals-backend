module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Products',
        'image2',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Products',
        'image3',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Products',
        'image4',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Scraps',
        'image2',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Scraps',
        'image3',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Scraps',
        'image4',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ]);
  },

  down(queryInterface) {
    return Promise.all([
      queryInterface.removeColumn('Products', 'image2')
    ]);
  },
};