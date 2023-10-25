import type { NextApiRequest, NextApiResponse } from "next";

import data from "constants/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "request not allowed" });
  }
  const { id } = req.query;
  try {
    const room = data.rooms.find((room) => room.id === id);
    if (room) {
      return res.status(200).json({ ...room });
    }
    return res.status(404).json({ message: "Room not found" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
}
