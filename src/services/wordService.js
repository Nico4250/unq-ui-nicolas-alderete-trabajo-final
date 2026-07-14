import axios from "axios";

const baseUrl = "https://word-api-hmlg.vercel.app";

export const validateWord = async (word) => {
  const response = await axios.get(`${baseUrl}/api/validate`, {
    params: { word },
  });
  return response.data.exists;
};
