import type { NextApiRequest, NextApiResponse } from "next";

import data from "constants/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "request not allowed" });
  }
  const search = req.query.searchParam;
  try {
    const rooms = data.rooms.filter(
      (room) =>
        room.name
          .toLocaleLowerCase()
          .includes((search as string).toLocaleLowerCase()) ||
        room.name.toLocaleLowerCase() == String(search).toLocaleLowerCase()
    );
    return res.status(200).json({ rooms });
  } catch (err) {
    res.status(404).json({ message: "No rooms found with that search" });
  }
}
