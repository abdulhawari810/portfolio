import db from "../config/database.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const ProfileModels = db.define(
  "profile",
  {
    users_uuid: {
      type: DataTypes.UUID,
      allowull: true,
      references: {
        model: "users",
        key: "uuid",
      },
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "default.png",
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      defaultValue: "male",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  },
);

export default ProfileModels;
