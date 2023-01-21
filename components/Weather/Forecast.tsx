import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Search from './Search';
import WeatherIcon from './WeatherIcon';

export interface ForecastData {
    list: Forecast[];
}

export interface Forecast {
    dt_txt: string;
    main: {
        temp: number;
        feels_like: number;
    };
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    }
    name: string;
}

const Forecast: React.FC = () => {
    const [forecastData, setForecastData] = useState<ForecastData | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchTerm = e.currentTarget.searchTerm.value;
        if(searchTerm === '') {
            setErrorMessage('Location is required');
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
            const { data } = await axios.get<ForecastData>(url);
            setForecastData(data);
        } catch (error) {
            setErrorMessage(`Spelled location wrong?`);
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">
                    3 Day Forecast
                </h1>
                <Search onSearch={handleSearch} />
                <div className="container mx-auto">
                    <div className="grid grid-cols-5 gap-4 mt-4 text-center md:flex-col sm:flex-col">
                        {forecastData?.list.slice(0, 5).map((forecast, i) => (
                            <div key={i} className="p-4 text-center bg-orange-300 rounded-lg dark:bg-cyan-400 dark:shadow-green-500">
                                <div className="text-xl div text-bold">
                                    {moment(forecast.dt_txt).format('dddd MM/YY')}
                                </div>
                                <div className="flex items-center justify-center mx-auto">

                                    <WeatherIcon 
                                        icon={forecast.weather[0].icon} 
                                        alt={forecast.weather[0].description} />
                                </div>
                                <div className="text-xl font-medium">
                                    {Math.round(forecast.main.temp)}°C
                                </div>
                                <div className="text-sm font-medium text-gray-600">
                                    Wind: {forecast.wind.speed}m/s
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Forecast;
        

