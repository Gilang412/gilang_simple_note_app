import { request, response } from "express";
import db from "../../../prisma/connection";

const users_read = async (req = request, res = response) => {
  try {
    const read_result = await db.users.findMany();
    return res.status(201).json({
      succes: true,
      quert: read_result,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

export default users_read;
