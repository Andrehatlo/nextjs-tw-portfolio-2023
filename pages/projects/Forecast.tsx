import React from 'react';
import Forecast from '../../components/Forecast/Forecast';

const ForecastPage = () => {
    return (
        <div className="sm:overflow-y-auto">
            <Forecast />
        </div>
    );
};

export default ForecastPage;