import db from "../config/database.js";
import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const UsersModels = db.define(
  "users",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Username tidak boleh kosong!",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Alamat Email tidak boleh kosong!",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Kata Sandi tidak boleh kosong!",
        },
      },
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "banned", "suspend", "delete"),
      defaultValue: "active",
    },
    role: {
      type: DataTypes.ENUM("admin", "users"),
      defaultValue: "users",
    },
    verifications: {
      type: DataTypes.ENUM("verified", "inverified"),
      defaultValue: "inverified",
    },
    two_factor_enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    two_factor_temp_secret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    two_factor_secret: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_verification_code: {
      type: DataTypes.STRING,
    },
    email_verification_expired_at: {
      type: DataTypes.DATE,
    },
    email_verify_resend_count: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    email_verify_last_sent_at: {
      type: DataTypes.DATE,
    },
    email_verify_locked_until: {
      type: DataTypes.DATE,
    },
    email_verify_attempts: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
  },

  {
    freezeTableName: true,
  },
);

export default UsersModels;
