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

function getApiUrl(endpoint: string, lat: number, lon: number) {
    const url = new URL(baseUrl + endpoint);
    url.searchParams.append('lat', lat.toString());
    url.searchParams.append('lon', lon.toString());
    url.searchParams.append('units', units);
    url.searchParams.append('appid', apiKey);
    return url.toString();
}

const getForecast = async (lat: number, lon: number) => {
    const href = getApiUrl('/forecast', lat, lon);
    try {
      const resp = await fetch(href);
      const data: ForecastResponse = await resp.json();
      return data;
    } catch (error) {
      return null;
    }
  };

// Fetch 5 day forecast from OpenWeatherApi
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { lat, lon } = req.query;
    const data = await getForecast(Number(lat), Number(lon));

    if (data === null) return res.status(500).json({ error: 'Something went wrong' });

    data.list = data.list.filter((forecast) => {
        const date = new Date(forecast.dt * 1000);
        return date.getHours() === 12;
        }); 

    res.status(200).json(data);
};

