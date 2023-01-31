import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Search from '../Weather/Search';
import ForecastCard from './ForecastCard';

export interface ForecastData {
    list: Forecast[];
}

interface Rain {
    '3h': number;
}

interface Snow {
    '3h': number;
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
    rain?: Rain;
    snow?: Snow;
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
            const forecastByDate = data.list.reduce((acc: any, forecast) => {
                const date = moment(forecast.dt_txt).format("YYYY-MM-DD");
                acc[date] = acc[date] || [];
                acc[date].push(forecast);
                return acc;
            }, {});
            
            // Average temperature and feels_like for each date
            const fiveDayForecast = Object.values(forecastByDate).map((forecasts: any) => {
                const temp = (forecasts).reduce((acc: any, forecast: any) => acc + forecast.main.temp, 0) / forecasts.length;
                const feels_like = (forecasts).reduce((acc: any, forecast: any) => acc + forecast.main.feels_like, 0) / forecasts.length;
                return {
                    dt_txt: moment(forecasts[0].dt_txt).format("YYYY-MM-DD"),
                    main: {
                        temp,
                        feels_like
                    },
                    weather: forecasts[0].weather,
                    rain: forecasts[0].rain,
                    snow: forecasts[0].snow
                };
            });
            const newForecastData = fiveDayForecast.map(({dt_txt, main, weather, rain, snow}) => {
                return { 
                    dt_txt, main, weather, name: 'unknown', rain, snow }
              });
            setForecastData({ list: newForecastData });
        } catch (error) {
            setErrorMessage("Spelled location wrong?");
            console.log(error);
        }
    };

    return (
        <div className="items-center self-center justify-center">
            <div className='flex flex-col items-center self-center justify-center h-screen'>
                <h1 className="text-3xl font-bold">
                        6 Day Forecast
                    </h1>
                    <div className="p-1 pb-1">
                        <Search onSearch={handleSearch} />
                    </div>
                <div className='flex overflow-x-scroll w-full h-100 gap-0 mt-4 justify-center p-4'>

                        {forecastData?.list.map((forecast, i) => (
                            <div key={i}>
                                <ForecastCard key={i} {...forecast} />
                            </div>
                        ))}
                        {errorMessage && <p>{errorMessage}</p>}

                </div>
            </div>
        </div>


            // {/* <div className='overflow-y-scroll h-screen flex self-center justify-center'>
            //     <div className='w-64 h-64 gap-4 mt-4 text-center'>
            //         {forecastData?.list.map((forecast, i) => (
            //             <div key={i}>
            //                 <ForecastCard key={i} {...forecast} />
            //             </div>
            //         ))}
            //         {errorMessage && <p>{errorMessage}</p>}
            //     </div>
            // </div> */}

                
    );
};

export default Forecast;