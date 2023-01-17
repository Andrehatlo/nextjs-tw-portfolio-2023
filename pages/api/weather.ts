import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

interface Locationprops {
  lat: number;
  lon: number; 
}

const getLocationName = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
  );
  return response.data.name;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { location } = req.query;
    if (location) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?
          q=${location}&units=metric&appid=${process.env.WEATHER_API_KEY}`
      );
      res.status(200).json(response.data);
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locationName = await getLocationName(lat, lon);
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?
                q=${locationName}&units=metric&appid=${process.env.WEATHER_API_KEY}`
            );
            res.status(200).json(response.data);
          },
          (error) => {
            res.status(500).json({message: error.message});
        }
      );
      } else {
        res.status(500).json({message: 'Geolocation is not supported by this browser'});
      }
    }
  }catch(error){
    let errorMessage = 'Something went wrong';
    try {
      errorMessage = error.response.data.message;
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
};