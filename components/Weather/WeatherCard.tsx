// Weather Card

import React from 'react';
import WeatherIcon from './WeatherIcon';
import moment from 'moment';

interface WeatherCardProps {
    weatherData: {
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
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            humidity: number;
        };
        dt: number;
        sys: {
            type: number;
            id: number;
            country: string;
        };
        name: string;
        cod: number;
        };
        
}



const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
    return (
        <div className="flex text-center p-4 mt-4">
                <div className="items-center justify-center flex-col">
                    <ul>
                        <li className="flex flex-col items-center justify-center font-poppins tracking-widest">
                            <p className="text-2xl font-bold">
                                {moment(weatherData.dt).format('dddd MM/DD') }
                            </p>
                        </li>
                        <li>
                            <p className="text-xl font-bold font-poppins tracking-widest">
                                {Math.round(weatherData.main.temp)}°C
                            </p>
                        </li>
                        <li className='flex flex-col items-center justify-center font-poppins tracking-widest'>
                            <p className="text-xl font-bold ">
                                {weatherData.weather[0].description.toUpperCase()}
                            </p>
                            <WeatherIcon icon={weatherData.weather[0].icon} alt={weatherData.weather[0].description} />
                        </li>
                        <li className="flex pr-4 py-5 font-medium font-poppins tracking-widest top-2 flex-col content-between space-y-2">
                            <li>
                                Feels like: {Math.round(weatherData.main.feels_like)}°C
                            </li>
                            {!weatherData.main.temp_min? `${` `}` : `${<li>Min: {Math.round(weatherData.main.temp_min)}°C</li>}`}
                            {!weatherData.main.temp_max? `${` `}` : `${<li>Max: {Math.round(weatherData.main.temp_max)}°C</li>}`}

                        </li>
                    </ul>
                </div>
            </div>

    );
};

export default WeatherCard;








