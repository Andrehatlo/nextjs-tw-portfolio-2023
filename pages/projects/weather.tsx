import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Weatherdata {
  coord: {
    lon: number;
    lat: number;
  };
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [location, setLocation] = useState('');
  const [place, setPlace] = useState('');

  {/* Weather Data  */}
  {/* Returns weather data based on LOCATION = City/Country */}
  const getWeather = async (location: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.WEATHER_API_KEY}`
      );
      setWeatherData(response.data);
      setPlace(response.data.name);
      
      console.log("getWeather: " + response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
       }
    }
  };



  {/* Returns weather data based on Latitude & Longitude values */}
  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          getLocationName(lat, lon);
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
            )
            .then((response) => {
              setWeatherData(response.data);
              setPlace(response.data.name);
              console.log("getCurrentLocationWeather: " + response.data);
            })
            .catch((error) => {
              if (error instanceof Error) {
                setError(error);
               }
            });
        },
        (error) => {
          if (error instanceof Error) {
            setError(error);
           }
        }
      );
    } else {
      setError(new Error('Geolocation is not supported by this browser.'));
    }
  };

  {/* Returns location name based on Longitude & Latitude values */}
  const getLocationName = async (lat: number, lon: number) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${process.env.WEATHER_API_KEY}`
      );
      setLocation(response.data[0].name);
      setPlace(response.data[0].name);
      console.log("getLocationName: " + response.data);
      console.log(location)
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
    }
  };

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  return (
  <div>
    <div className="overflow-auto">
        <div className="flex flex-col items-center h-screen"> 
            <div className="py-4 mx-auto mb-2 text-center">
                <h1 className="text-4xl font-bold font-raleway text-fuchsia-600 shadow-sky-700"> 
                Weather.</h1>
                <h2 className="text-2xl leading-tight text-black-400 font-raleway">
                Nextjs, React & Tailwind 
                </h2>
            </div>
        <div className="mb-4">
            <input
            type="text"
            placeholder="location..."
            className="w-64 pl-4 mr-6 rounded-sm shadow-lg outline-indigo font-raleway shadow-sky-700"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />
            </div>
        <div className="mb-4">
            <button
              onClick={() => getWeather(location)}
              className="px-12 py-2 font-bold text-gray-700 transition duration-300 bg-indigo-300 border-none rounded-lg shadow-lg outline-none font-raleway hover:bg-indigo-600 hover:text-white shadow-sky-700"
            >
              Search
            </button>
        </div>
        <button
            onClick={getCurrentLocationWeather}
            className="px-12 py-2 font-bold text-gray-700 transition duration-300 bg-indigo-300 border-none rounded-lg shadow-lg outline-none font-raleway hover:bg-indigo-600 hover:text-white shadow-sky-700"
        >
            Current Location
        </button>
        {weatherData && (
            <div className="flex p-4 mt-4 text-center bg-blue-200 rounded-lg shadow-lg shadow-sky-700">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-blue-400">
                      {place}
                  </p>
                  <p className="mt-6 text-xl font-bold text-blue-800">
                    Conditions
                  </p>
                  <p className="text-base font-medium text-gray-800">
                    {weatherData.weather[0].description}
                  </p>
                  <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  />

                  <p className="text-xl font-bold text-blue-800">Temperature</p>
                  <p className="text-base font-medium text-gray-800">
                    Main: {weatherData.main.temp}°C
                  </p>
                  <p className="text-base font-medium text-gray-800">
                    Min: {weatherData.main.temp_min}°C
                  </p>
                  <p className="text-base font-medium text-gray-800">
                    Max: {weatherData.main.temp_max}°C
                  </p>
              </div>
            </div>
        )}
        {error && <p>{error.message}</p>}
        </div>
      </div> 
    </div>
  );
  }
}
  
export default Weather;
