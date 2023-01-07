import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export const getLocationName = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${process.env.WEATHER_API_KEY}`
    );
    return response.data[0].name;
  } catch (error) {
    throw error;
  }
};