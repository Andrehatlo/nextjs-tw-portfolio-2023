import React from 'react';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = process.env.OPENWEATHER_API_KEY || '';
const units = 'metric';

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Clouds = {
  all: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Rain = {
  '3h': number;
};

type Sys = {
  pod: string;
};

type List = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
};

type Coord = {
  lat: number;
  lon: number;
};

type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

export type WeatherResponse = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
};

type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type WeatherResponse = {
  data: WeatherData;
};

export const getWeather = async (location: string): Promise<WeatherResponse> => {
  const response = await axios.get(baseUrl + "weather", {
    params: {
      q: location,
      units,
      appid: apiKey,
    },
  });
  return response;
};

export const getForecast = async (location: string): Promise<WeatherResponse> => {
  const response = await axios.get(baseUrl + "forecast", {
    params: {
      q: location,
      units,
      appid: apiKey,
    },
  });
  return response;
};

export const getWeatherByCoords = async (lat: number, lon: number): Promise<WeatherResponse> => {
  const response = await axios.get(baseUrl + "weather", {
    params: {
      lat,
      lon,
      units,
      appid: apiKey,
    },
  });
  return response;
};


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
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.WEATHER_API_KEY}`
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
              `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=${process.env.WEATHER_API_KEY}`
            );
            res.status(200).json(response.data);
          },
          (error) => {
            const errorMessage = error.message;
            res.status(500).json({message: errorMessage});
        }
      );
      } else {
        res.status(500).json({message: 'Geolocation is not supported by this browser'});
      }
  } 
} catch (error: any) {
  let errorMessage = 'Something went wrong';
  if (error.isAxiosError) {
    errorMessage = error.response.data.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  console.log(errorMessage);
  res.status(500).json({ message: errorMessage });
}};