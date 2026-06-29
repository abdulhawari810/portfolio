import Sequelize from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const RefreshTokenModels = db.define(
  "refresh_token",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    users_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "uuid",
      },
    },
    token_hash: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Refresh Token tidak boleh kosong!",
        },
      },
    },
    browser: {
      type: DataTypes.STRING,
    },
    browser_version: {
      type: DataTypes.STRING,
    },
    os: {
      type: DataTypes.STRING,
    },
    os_version: {
      type: DataTypes.STRING,
    },
    device_type: {
      type: DataTypes.STRING,
    },
    user_agent: {
      type: DataTypes.TEXT,
    },
    ip_address: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    last_used_at: {
      type: DataTypes.DATE,
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    revoked_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  },
);

export default RefreshTokenModels;
