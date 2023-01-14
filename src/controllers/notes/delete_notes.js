import { request, response } from "express";
import db from "../../../prisma/connection";

const delete_notes = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const data = await req.body;

    const delete_notes = await db.notes.delete({
      where: {
        id: parseInt(id),
        users_id: data.id,
      },
    });
    return res.status(201).json({
      succes: true,
      query: delete_notes,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

export default delete_notes;
