import db from "../config/database.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const ProjectModels = db.define(
  "projects",
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
          msg: "Slug tidak boleh kosong",
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Judul Project tidak boleh kosong!",
        },
      },
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Gambar Sampul Project tidak boleh kosong!",
        },
      },
    },
    screenshot: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    database_uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: "database",
        key: "uuid",
      },
    },
    version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    demo_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: "Link URL Demo harus berisi link yang valid!",
        },
      },
    },
    category_uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "category",
        key: "uuid",
      },
    },
    users_uuid: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "users",
        key: "uuid",
      },
    },
  },
  {
    freezeTableName: true,
  },
);

export default ProjectModels;
