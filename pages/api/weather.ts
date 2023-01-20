import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = process.env.WEATHER_API_KEY;
const units = "metric";

type WeatherData = {
    coord: Coord;
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

type Coord = {

    lon: number;
    lat: number;
};

type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
};

type Wind = {
    speed: number;
    deg: number;
};

type Clouds = {
    all: number;
};

type Sys = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
};


// Fetching weather data Location:GeoLocation:LatLon from OpenWeather API
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WeatherData>
) {
    try {
        if (location) {
            const response = await axios.get(
                `${baseUrl}weather?q=${location}&appid=${apiKey}&units=${units}`
            );
            res.status(200).json(response.data);

        } else if (lat && lon) {           
            const { lat, lon } = req.query;
            const url = `${baseUrl}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
            const response = await axios.get(url);
            res.status(200).json(response.data);

        } else {
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const url = `${baseUrl}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
                    const response = await axios.get(url);
                    res.status(200).json(response.data);
                },
                (error) => {
                    console.log(error);
                }
            );
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }   
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
