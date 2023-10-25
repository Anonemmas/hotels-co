import type { NextApiRequest, NextApiResponse } from "next";

import data from "constants/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "request not allowed" });
  }
  const page = Number(req.query.page);

  try {
    const rooms = data.rooms.slice((page - 1) * 8, page * 8);
    return res.status(200).json({ rooms });
  } catch (err) {
    res.status(400).json({ message: err });
  }
}
