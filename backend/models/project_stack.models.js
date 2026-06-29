import Sequelize from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const ProjectStackModels = db.define(
  "project_stack",
  {
    project_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "projects",
        key: "uuid",
      },
    },
    tech_stack_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "tech_stack",
        key: "uuid",
      },
    },
  },
  {
    freezeTableName: true,
  },
);

export default ProjectStackModels;
