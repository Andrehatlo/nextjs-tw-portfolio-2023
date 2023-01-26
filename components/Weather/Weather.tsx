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
  snow: {
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
        <div className="flex flex-col items-center justify-center h-screen mx-auto">
          <h1 className="text-3xl font-bold">
              The Weather
          </h1>
          <h1 className="text-3xl font-bold">
             {location ? location : '...'}
          </h1>
          <div className="p-4 pb-4">
              <Search onSearch={handleSearch} />
          </div>
          <div className="container grid grid-cols-3">
            <div></div>
            <div className="text-center md:flex-col sm:flex-col pt-5">
                {weatherData && (
                    <WeatherCard weatherData={weatherData} />
                )}
                {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
        </div>
  );
};

export default Weather;


