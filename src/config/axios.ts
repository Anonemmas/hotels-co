import axios from "axios";

const AxiosConfig = () => {
  const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return AxiosInstance;
};

export default AxiosConfig;
