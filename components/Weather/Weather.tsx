import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import WeatherIcon from './WeatherIcon';
import WeatherCard from './WeatherCard';

// openweathermap.org api weather data 

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  rain: {
    '1h': number;
  }
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [location, setLocation] = useState('');

  const getWeather = async (location: string) => {
    try {
      const response = await axios.get(

        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.WEATHER_API_KEY}`
      );
      setWeatherData(response.data);
      setLocation(response.data.name);
    } catch (error: any) {
      if (error) {
        setErrorMessage(error);
      }
    }
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = e.currentTarget.searchTerm.value;
    if (searchTerm === '') {
      setErrorMessage('Location is required');
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
      const { data } = await axios.get<WeatherData>(url);
      setWeatherData(data);
      setLocation(data.name);
    } catch (error) {
      setErrorMessage('Spelled location wrong?');
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center flex-shrink h-screen">
        <h1 className="text-3xl font-bold">
            Whats the Weather in {location ? location : '...'}
        </h1>
        <Search onSearch={handleSearch} />
        {weatherData && (          
          <div className="flex p-4 mt-4 text-center text-white rounded-lg shadow-lg bg-fuchsia-400 dark:bg-yellow-400 dark:text-black shadow-sky-700 dark:shadow-cyan-400"> 
            <WeatherCard weatherData={weatherData}  />
          </div>
        )}
        {errorMessage && (
          <div className="flex flex-col items-center justify-center p-4 mt-4 text-center bg-red-200 rounded-lg shadow-lg shadow-sky-700">
            <p className="text-xl font-bold text-red-700">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;


