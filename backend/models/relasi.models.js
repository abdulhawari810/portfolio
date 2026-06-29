import UsersModels from "./users.models.js";
import ProfileModels from "./profile.models.js";
import CategoryModels from "./category.models.js";
import TechStackModels from "./tech_stack.models.js";
import DatabaseModels from "./database.models.js";
import ProjectModels from "./project.models.js";
import ProjectStackModels from "./project_stack.models.js";
import RefreshTokenModels from "./refresh_token.models.js";

UsersModels.hasOne(ProfileModels, {
  foreignKey: "users_uuid",
  as: "profiles",
});

ProfileModels.belongsTo(UsersModels, {
  foreignKey: "users_uuid",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

UsersModels.hasMany(ProjectModels, {
  foreignKey: "users_uuid",
  as: "projects",
});

ProjectModels.belongsTo(UsersModels, {
  foreignKey: "user_uuid",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

CategoryModels.hasMany(ProjectModels, {
  foreignKey: "category_uuid",
  as: "projects",
});

ProjectModels.belongsTo(CategoryModels, {
  foreignKey: "category_uuid",
  as: "category",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

ProjectModels.belongsToMany(TechStackModels, {
  through: ProjectStackModels,
  foreignKey: "project_id",
});

TechStackModels.belongsToMany(ProjectModels, {
  through: ProjectStackModels,
  foreignKey: "tech_stack_id",
});

UsersModels.hasMany(RefreshTokenModels, {
  foreignKey: "users_id",
  as: "refresh_tokens",
});

RefreshTokenModels.belongsTo(UsersModels, {
  foreignkey: "users_id",
  as: "user",
});

export {
  ProfileModels,
  UsersModels,
  ProjectModels,
  CategoryModels,
  TechStackModels,
  DatabaseModels,
  ProjectStackModels,
  RefreshTokenModels,
};
