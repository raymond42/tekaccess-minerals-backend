module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Products',
        'subtitle',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ]);
  },

  down(queryInterface) {
    return Promise.all([
      queryInterface.removeColumn('Products', 'subtitle')
    ]);
  },
};