import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';

const WeatherPage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState('');
    const [place, setPlace] = useState('');
  
    const getWeatherData = async (location: string) => {
      try {
        const response = await axios.get(`/api/weather?location=${location}`);
        setWeatherData(response.data);
        setPlace(location);
      } catch (error) {
        setError(error);
      }
    };
  
    const getCurrentLocationWeather = async () => {
      try {
        const response = await axios.get('/api/weather');
        setWeatherData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    useEffect(() => {
        getCurrentLocationWeather();
      }, []);

    return (
        <div className="overflow-auto">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="py-4 mx-auto mb-2">
                    <h1 className="text-4xl font-bold font-raleway text-fuchsia-600"> 
                    The Weather.</h1>
                    <h2 className="text-2xl leading-tight text-black-400 font-raleway">
                    Nextjs, React & Tailwind 
                    </h2>
                </div>
            <div className="mb-10">
                <input
                type="text"
                placeholder="location..."
                className="w-64 pl-4 mr-6 rounded-sm outline-indigo font-raleway"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <button
                onClick={() => getWeatherData(location)}
                className="px-12 py-2 font-bold text-gray-700 transition duration-300 bg-indigo-300 border-none rounded-sm outline-none font-raleway hover:bg-indigo-600 hover:text-white"
                >
                Search
                </button>
            </div>
            <button
                onClick={getCurrentLocationWeather}
                className="px-12 py-2 font-bold text-gray-700 transition duration-300 bg-indigo-300 border-none rounded-sm outline-none font-raleway hover:bg-indigo-600 hover:text-white"
            >
                Current Location
            </button>
            {weatherData && (
                <div className="flex items-center justify-between p-4 mt-4 bg-blue-200 rounded-lg">
                <div>
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
    );
    }
  
export default WeatherPage;
