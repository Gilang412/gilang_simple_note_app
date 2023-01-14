import { request, response } from "express";
import db from "../../../prisma/connection";

const read_notes = async (req = request, res = response) => {
  try {
    const { users_id } = await req.body;

    const read_result = await db.notes.findMany({
      where: {
        users_id: users_id,
      },
    });
    return res.status(201).json({
      succes: true,
      query: read_result,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

export default read_notes;
