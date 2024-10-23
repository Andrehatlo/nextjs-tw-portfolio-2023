import React from 'react';

interface Props {
    icon: string;
    alt: string;
}

const WeatherIcon: React.FC<Props> = ({ icon }) => {
    return (
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} className="flex-shrink w-200 h-200" alt={icon}/>
    );
};

export default WeatherIcon;
