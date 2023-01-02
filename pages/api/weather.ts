import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
