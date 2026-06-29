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

export const getTechStack = async (req, res) => {
  try {
    const stack = await TechStackModels.findAll({
      order: ["createdAt", "DESC"],
    });

    if (stack?.length === 0)
      return success(res, 200, "Tech Stack masih kosong!");

    success(res, 200, "Tech Stack berhasil ditemukan!");
  } catch (err) {
    error(res, 500, err.message);
  }
};

export const createTechStack = async (req, res) => {
  try{
    const users = req.user;
    const { name, description } = req.body;

    if(!name || !description) return error(res, 400, "Semua bidang input tidak boleh kosong!");

    if(!name) return error(res, 400, "Nama bidang input tidak boleh kosong!");
    if(!description) return error(res, 400, "Deskripsi bidang input tidak boleh kosong!");

    const slug = slugify(name, {lower:true});

    if(users?.role !== "admin") return error(res, 401, "Hak akses dibatasi!");

    await TechStackModels.create({
      slug,name,description
    });

    success(res, 201, "Tech Stack berhasil ditambahkan!");
  }catch(err){
    error(res, 500, err.message);
  }
}

export const updateTechStack = async (req, res) => {
  try{
    const { id } = req.params;
    const { name, description } = req.body;

    const tech_stack = await TechStackModels.findOne({
      where: {uuid: id}
    });

    if(!tech_stack) return error(res, 404, "Tech Stack tidak dapat ditemukan!");

    const slug = slugify(name, {lower: true});

    await TechStackModels.update({
      slug: slug || tech_stack.slug,
      name: name || tech_stack.name,
      description: description || tech_stack.description
    });

    success(res, 200, "Tech Stack berhasil diupdate!");
  }catch(err){
    error(res, 500, err.message);
  }
}


export const deleteTechStack = async (req, res) => {
  try{
    const { id } = req.params;

    const tech_stack = await TechStackModels.findOne({where: {uuid: id}});

    const existProjectStack = await ProjectStackModels.findOne({ where: {tech_stack_id: id} });

    if(!tech_stack) return error(res, 404, "Tech Stack tidak dapat ditemukan!");

    if(existProjectStack) return error(res, 400, "Tech Stack ini sedang dipakai!");

    await TechStackModels.destroy({where: {uuid: id}});

    success(res, 200, "Tech Stack berhasil dihapus!");
  }catch(err){
    error(res, 500, err.message);
  }
}
