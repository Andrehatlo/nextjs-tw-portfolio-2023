import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Search from './Search';
import WeatherIcon from './WeatherIcon';
import ForecastCard from './ForecastCard';

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
    name: string;
    rain: {
        '3h': number;
    }
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

            // Group forecast by date
            const forecastByDate = data.list.reduce((acc, forecast) => {
                const date = moment(forecast.dt_txt).format("YYYY-MM-DD");
                acc[date] = acc[date] || [];
                acc[date].push(forecast);
                return acc;
            }, {});
            
            // Average temperature and feels_like for each date
            const fiveDayForecast = Object.values(forecastByDate).map(forecasts => {
                const temp = forecasts.reduce((acc, forecast) => acc + forecast.main.temp, 0) / forecasts.length;
                const feels_like = forecasts.reduce((acc, forecast) => acc + forecast.main.feels_like, 0) / forecasts.length;
                return {
                    dt_txt: moment(forecasts[0].dt_txt).format("YYYY-MM-DD"),
                    main: {
                        temp,
                        feels_like
                    },
                    weather: forecasts[0].weather,
                };
            });
            setForecastData({ list: fiveDayForecast });
        } catch (error) {
            setErrorMessage("Spelled location wrong?");
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">
                    6 Day Forecast
                </h1>
                <div className="p-4 pb-4">
                    <Search onSearch={handleSearch} />
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-6 gap-4 mt-4 text-center md:flex-col sm:flex-col">
                        {forecastData?.list.map((forecast, i) => (
                            <ForecastCard key={i} {...forecast} />
                        ))}
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
                
    );
};

export default Forecast;