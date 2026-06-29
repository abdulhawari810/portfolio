import jwt from "jsonwebtoken";
import { UsersModels } from "../models/inisiasi.models.js";
import { error } from "../utils/response.js";

export const verifyRoleAdmin = async (req, res, next) => {
  try{
    const admin = req.user.role;

    if(admin !== "admin") return error(res, 401, "Hak akses dibatasi");

    next();
  }catch(err){
    error(res, 500, err.message, err)
  }
}

export cibst verifyUsers = async (req, res, next) => {
  try{
    const users = req.user.role;

    if(users !== "users") return error(res, 401, "Anda harus login terlebih dahulu!");

    next();
  }catch(err){
    error(res, 500, err.message, err);
  }
}

