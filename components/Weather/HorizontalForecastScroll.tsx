// Horizontal Forecast Scroll Component
//
// Path: components/Weather/HorizontalForecastScroll.tsx
// Compare this snippet from components/Weather/Forecast.tsx:

import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Search from './Search';
import WeatherIcon from './WeatherIcon';
import ForecastCard from './ForecastCard';
import Forecast from './Forecast';

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

const HorizontalForecastScroll: React.FC = (props) => {
    //align input field to the center
    const [forecastData, setForecastData] = useState<ForecastData | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    return(
        <div className="">
            <div className='overflow-y-scroll h-screen w-full'>
                <div className='inline-block w-66   h-65    gap-4 mt-5 text-center'>
                    {forecastData?.list.map((forecast, i) => (
                        <div key={i}>
                            <ForecastCard {...forecast} />
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    )        
}
