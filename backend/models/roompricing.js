"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../util/db.js";

class RoomPricing extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    this.belongsTo(models.Hotel, {
      foreignKey: "hotelId",
      onDelete: "CASCADE",
    });
    this.belongsTo(models.Room, {
      foreignKey: "roomId",
      onDelete: "CASCADE",
    });
  }
}
RoomPricing.init(
  {
    hid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hotelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "RoomPricing",
  }
);
export default RoomPricing;
