import {
  UsersModels,
  ProfileModels,
  CategoryModels,
  ProjectModels,
  ProjectStackModels,
  TechStackModels,
  DatabaseModels,
} from "../models/inisiasi.models.js";

import slugify from "slugify";
import { success, error } from "../utils/response.utils.js";

export const getCategory = async (req, res) => {
  try {
    const category = await CategoryModels.findAll();

    if (category?.length === 0)
      return success(res, 200, "Data Kategori masih kosong!", category);

    success(res, 200, "Data kategory berhasil ditemukan!", category);
  } catch (err) {
    error(res, 500, err.message, err);
  }
};

export const createCategory = async (req,res) => {
  try{
    const { name, description } = req.body;

    const existingCategory = await CategoryModels.findOne({
      where: { name}
    });

    if(!name) return error(res, 400, "Nama Kategori tidak boleh kosong!");
    if(!description) return error(res, 400, "Deskripsi Kategori tidak boleh kosong!");

    if(existingCategory) return error(res, 400, `${category} Ini sudah pernah digunakan!`);

    const slug = slugify(name, {
      lower: true
    });

    await CategoryModels.create({
      slug, name, description
    })

    success(res, 201, "Kategori Berhasil ditambahkan!");

  } catch(err){
    error(res, 500, err.message, err)
  }
}

export const updateCategory = async (req, res) => {
  try{
    const { uuid } = req.params;
    const { name, description } = req.body;

    if(!name) return error(res, 400, "Nama Kategori tidak boleh kosong!");

    if(!description) return error(res, 400, "Deskripsi Kategori tidak boleh kosong!");

    const slug = slugify(name, {lower: true});

    const existingCategory = await CategoryModels.findOne({
      where: {
        uuid
      },
    });

    if(!existingCategory) return error(res, 404, `kategori tidak dapat ditemukan!`);

    await CategoryModels.update({name, description, slug},{where: {uuid}});

    success(res, 200, `${existingCategory?.name} berhasil diubah!`);
  }catch(err){
    error(res, 500, err.message, err);
  }
}

export const deleteCategory = async ( req, res ) => {
  try{
    const { uuid } = req.params;

    if(!uuid) return error(res, 400, "Harap isi uuid terlebih dahulu!");
    const existingCategory = await CategoryModels.findOne({
      where: {uuid}
    });

    const existCategoryProject = await ProjectModels.findOne({
      where: {category_uuid: uuid}
    });

    if(!existingCategory) return error(res, 404, `kategori tidak dapat ditemukan!`);

    if(existCategoryProject) return error(res, 400, `${existCategoryProject?.name} kategori tidak bisa dihapus dikarenakan sudah terpakai!`);

    const category = await CategoryModels.destroy({
      where: {uuid}
    })

    success(res, 200, `${existingCategory?.name} berhasil dihapus!`);
  } catch(err){
    error(res, 500, err.message, err)
  }
}










