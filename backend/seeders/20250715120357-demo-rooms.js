"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rooms",
      [
        {
          roomId: 1,
          roomType: "single",
          roomName: "Room 101",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          roomType: "double",
          roomName: "Room 102",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 3,
          roomType: "suite",
          roomName: "Suite A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rooms", null, {});
  },
};
