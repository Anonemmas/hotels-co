import sleep from "helpers/sleep";

import Axios from "../config/axios";

const axios = Axios();

// Get all rooms
export const GetAllRooms = async ({ page }: { page: number }) => {
  await sleep(2000);
  const data = await axios.get(`api/rooms?page=${page}`);
  return data?.data.rooms;
};

// Get single room from api
export const GetRoomById = async ({ id }: { id: string }) => {
  await sleep(1500);
  const data = await axios.get(`api/rooms/${id}`);
  return { ...data };
};

// Query rooms by their names from search
export const GetSearchResults = async ({
  searchParam,
}: {
  searchParam: string;
}) => {
  await sleep(500);
  const data = await axios.get(`api/search?searchParam=${searchParam}`);
  return { ...data };
};
