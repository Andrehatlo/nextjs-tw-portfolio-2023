import React from 'react';
import WeatherIcon from './WeatherIcon';
import moment from 'moment';



interface ForecastProps {
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
        rain?: {
            '3h': number;
        }
        snow?: {
            '3h': number;
        }
};


const ForecastCard: React.FC<ForecastProps> = (props, key) => {

    return (
       <>
            <div key={key} className="p-4 text-center font-bold text-gray-600 border-opacity-40 border border-white-600 shadow-lg drop-shadow-lg">
                <div className="grid grid-row-2 gap-4 text-center md:flex-col sm:flex-col ">
                    <div className="text-sm font-medium  font-poppins tracking-widest">
                        {moment(props.dt_txt).format('MM/DD')}
                    </div>
                    <div className="text-md div text-bold  font-poppins tracking-widest">
                        {moment(props.dt_txt).format('dddd')}
                    </div>
                
                </div>
                <div className="text-sm font-medium"> 
                        {props.weather[0].description.toUpperCase()}
                </div>
                <div className="flex items-center justify-center mx-auto drop-shadow-lg">
                    <WeatherIcon icon={props.weather[0].icon} alt={props.weather[0].description}  />
                </div>
                <div className="text-xl font-medium font-poppins tracking-widest"> 
                            {Math.round(props.main.temp)}°C
                        </div>
                <div className="grid grid-cols-1 gap-4 text-center md:flex-col sm:flex-col p-4">
                    <div className='grid grid-row-2 gap-4 items-center justify-center'>
                        <div className="text-l font-medium font-poppins tracking-widest"> 
                            Feels {Math.round(props.main.feels_like)}°C
                        </div>
                    </div>
                    <div className='grid grid-col-2 gap-4 items-center justify-center'>
                        <div className="text-l font-medium font-poppins tracking-widest">
                            {props.rain ? `Rain: ${props.rain['3h']}mm}` : ``}
                        </div>
                        <div className="text-l font-medium font-poppins tracking-widest">
                            {props.snow ? `Snow: ${props.snow['3h']}mm` : ``}
                         </div>
                    </div>
                </div>
            </div>
         </>
    )
}

export default ForecastCard;