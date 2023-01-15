import { request, response } from "express";
import db from "../../../prisma/connection";

const notes_readById = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const result_byId = await db.notes.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(201).json({
      success: true,
      message: result_byId,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default notes_readById;
