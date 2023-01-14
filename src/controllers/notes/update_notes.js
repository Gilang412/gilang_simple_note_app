import { request, response } from "express";
import db from "../../../prisma/connection";

const update_notes = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const data = await req.body;
    console.info(id);
    const findNotes = await db.notes.findMany({
      where: {
        AND: [
          {
            id: parseInt(id),
          },
          {
            users_id: data.users_id,
          },
        ],
      },
    });
    if (findNotes.length == 0) {
      return res.status(404).json({
        success: false,
        message: "not found",
      });
    }
    const update_result = await db.notes.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: data.title,
        notes: data.notes,
      },
    });
    return res.status(201).json({
      success: true,
      query: update_result,
    });
  } catch (error) {
    console.info(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default update_notes;
