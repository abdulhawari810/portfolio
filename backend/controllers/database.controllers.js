import {
  UsersModels,
  ProfileModels,
  CategoryModels,
  ProjectModels,
  ProjectStackModels,
  TechStackModels,
  DatabaseModels,
} from "../models/inisiasi.models.js";
import { success, error } from "../utils/response.utils.js";
import slugify from "slugify";

export const getDatabase = async (req, res) => {
  try {
    const database = await DatabaseModels.findAll();

    if (database?.length === 0)
      return error(res, 200, "List Database masih kosong!");

    success(res, 200, "List Database berhasil ditemukan!", database);
  } catch (err) {
    error(res, 500, err.message);
  }
};

export const createDatabase = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description)
      return error(res, 400, "Semua bidang input tidak boleh kosong!");

    if (!name) return error(res, 400, "Nama bidang input tidak boleh kosong!");
    if (!description)
      return error(res, 400, "Deskripsi bidang input tidak boleh kosong!");

    const slug = slugify(name, { lower: true });

    await DatabaseModels.create({
      slug,
      name,
      description,
    });

    success(res, 201, "List Database berhasil ditambahkan!");
  } catch (err) {
    error(res, 500, err.message);
  }
};

export const updateDatabase = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const database = await DatabaseModels.findOne({ where: { uuid: id } });

    if (!database)
      return error(res, 400, "List Database tidak dapat ditemukan!");

    const slug = slugify(name, { lower: true });

    if (database) {
      await DatabaseModels.update({
        slug: slug || database.slug,
        name: name || database.name,
        description: description || database.description,
      });
    }

    success(res, 200, "List Database berhasil diupdate!");
  } catch (err) {
    error(res, 500, err.message);
  }
};

export const deleteDatabase = async (req, res) => {
  try {
    const { uuid } = req.params;

    const database = await DatabaseModels.findByPk(uuid);

    if (!database)
      return error(res, 404, "List Database tidak dapat ditemukan!");

    await DatabaseModels.destroy({ where: { uuid } });

    success(res, 200, "List Database berhasil dihapus!");
  } catch (err) {
    error(res, 500, err.message);
  }
};
