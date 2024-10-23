import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Weather from '../../components/Weather/Weather';

const WeatherPage = () => {
    return (
        <div>
            <Weather />
        </div>
    );
};

export default WeatherPage;