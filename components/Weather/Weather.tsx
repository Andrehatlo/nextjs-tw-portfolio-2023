import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import WeatherIcon from './WeatherIcon';

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
      if (data.cod === '404') {
        setErrorMessage('Location not found');
        return;
      }
      setWeatherData(data);
    } catch (error) {
      setErrorMessage('Spelled location wrong?');
      console.log(error);
    }
  };

  return (
    <div>

      <div className="flex flex-col items-center justify-center flex-shrink h-screen">
        <h1 className="text-3xl font-bold">
                    Whats the Weather
        </h1>
        <Search onSearch={handleSearch} />
        {weatherData && (
              <div className="flex p-4 mt-4 text-center text-white rounded-lg shadow-lg bg-fuchsia-400 dark:bg-yellow-400 dark:text-black shadow-sky-700 dark:shadow-cyan-400">
          <div className="flex items-center justify-center flex-cola">
              <ul>
                <li>
                  <p className="text-2xl font-bold ">
                    {weatherData.name}
                  </p>
                </li>
                <li>
                  <p className="text-xl font-bold ">
                    Temp: {weatherData.main.temp}°C
                  </p>
                </li>
                <li>
                  <div className="flex flex-col items-center justify-center">
                    <li>
                      <p className="text-xl font-bold ">
                        {weatherData.weather[0].description.toUpperCase()}
                      </p>
                    </li>
                    <WeatherIcon
                      icon={weatherData.weather[0].icon}
                      alt={weatherData.weather[0].description}
                    />
                  </div>
                </li>
                <div className="flex items-center justify-center p-4 py-4 font-medium flex-cola font-poppins top-2">
                  <li>Feels like: {weatherData.main.feels_like}°C</li>
                  <li>Min: {weatherData.main.temp_min}°C</li>
                  <li>Max: {weatherData.main.temp_max}°C</li>
                  <li>Clouds: {weatherData.clouds.all}%</li>
                  <li>City: {weatherData.name}</li>                
                </div>
              </ul>
            </div>
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


