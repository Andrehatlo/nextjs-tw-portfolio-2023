import React from 'react';
import WeatherIcon from '../Weather/WeatherIcon';
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
            <div key={key} className="w-40 h-80 p-4 text-center font-bold text-gray-600 border-opacity-40 border border-white-600 shadow-lg drop-shadow-lg">

                    <div className="grid grid-row-2 gap-4 text-center flex-shrink">
                        <div className="text-sm font-medium  font-poppins tracking-widest">
                            {moment(props.dt_txt).format('DD/MM')}
                        </div>
                        <div className="text-md div text-bold  font-poppins tracking-widest">
                            {moment(props.dt_txt).format('dddd')}
                        </div>
                    </div>
                    
                    <div className="text-sm font-medium"> 
                            {props.weather[0].description.toUpperCase()}
                            {props.snow?.['3h'] ? ` ${props.snow?.['3h']}mm` : ``}
                            {props.rain?.['3h'] ? ` ${props.rain?.['3h']}mm` : ``}
                    </div>
                    
                    <div className="flex items-center justify-center mx-auto drop-shadow-lg">
                        <WeatherIcon icon={props.weather[0].icon} alt={props.weather[0].description}  />
                    </div>
                    
                    <div className="text-xl font-medium font-poppins tracking-widest"> 
                                {Math.round(props.main.temp)}°C
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 text-center p-4">
                        <div className='grid grid-row-2 gap-4 items-center justify-center'>
                            <div className="text-l font-medium font-poppins tracking-widest"> 
                                Feels {Math.round(props.main.feels_like)}°C
                            </div>
                        </div>
                    </div>

            </div>
         </>
    )
}

export default ForecastCard;