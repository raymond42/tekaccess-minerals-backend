module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        productName: "Surgical Masks",
        description:
          "A surgical mask is intended to be worn by health professionals during surgery and certain health care procedures to catch microorganisms shed in liquid droplets and aerosols from the wearer’s mouth and nose.Simple surgical masks protect wearers from being splashed in the mouth with body fluids, and prevent transmission of body fluids from the wearer to others, e.g. the patient. Surgical masks consist of 3 different types which are 3ply, 2ply and a simple mask.",
        productCategory: 1,
        image:
          "https://res.cloudinary.com/darbbvujm/image/upload/v1584481818/SurgicalMask2_ywn1c7.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
