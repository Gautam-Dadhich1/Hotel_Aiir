import axios from "axios";

const url = "http://127.0.0.1:3003/hotels";

export const getAllHotels = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
};
