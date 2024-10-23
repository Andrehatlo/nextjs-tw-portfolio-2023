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
        snow?: {
            '1h': number;
        };
        rain?: {
            '1h': number;
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
             <>
             <div className="pt-5 p-4 text-center font-bold text-gray-600 border-opacity-40 border border-white-600 shadow-lg drop-shadow-lg">
                 <div className="grid grid-row-2 gap-4 text-center md:flex-col sm:flex-col ">
                     <div className="text-sm font-medium  font-poppins tracking-widest">
                         {moment(weatherData.dt).format('DD/MM')}
                     </div>
                     <div className="text-md div text-bold  font-poppins tracking-widest">
                         {moment(weatherData.dt).format('dddd')}
                     </div>
                 
                 </div>
                 <div className="text-sm font-medium"> 
                         {weatherData.weather[0].description.toUpperCase()}
                 </div>
                 <div className="flex items-center justify-center mx-auto drop-shadow-lg">
                     <WeatherIcon icon={weatherData.weather[0].icon} alt={weatherData.weather[0].description}  />
                 </div>
                 <div className="text-xl font-medium font-poppins tracking-widest"> 
                             {Math.round(weatherData.main.temp)}°C
                         </div>
                 <div className="grid grid-cols-1 gap-4 text-center md:flex-col sm:flex-col p-4">
                     <div className='grid grid-row-2 gap-4 items-center justify-center'>
                         <div className="text-l font-medium font-poppins tracking-widest"> 
                             Feels {Math.round(weatherData.main.feels_like)}°C
                         </div>
                     </div>
                     <div className='grid grid-col-2 gap-4 items-center justify-center'>
                         <div className="text-l font-medium font-poppins tracking-widest">
                             {weatherData.rain ? `Rain: ${weatherData.rain['1h']}mm}` : ``}
                         </div>
                         <div className="text-l font-medium font-poppins tracking-widest">
                             {weatherData.snow ? `Snow: ${weatherData.snow['1h']}mm` : ``}
                          </div>
                     </div>
                 </div>
             </div>
          </>
    );
};

export default WeatherCard;








