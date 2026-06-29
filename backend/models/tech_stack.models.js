import Sequelize from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const TechStackModels = db.define(
  "tech_stack",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Slug tidak boleh kosong!",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Nama Kategori tidak boleh kosong!",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  },
);

export default TechStackModels;
