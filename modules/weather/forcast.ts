import type { ForcastResponse } from '../../pages/api/weather';

export type ForecastRequest = {
    lat: number;
    lon: number;
};

const baseUrl = "/api";

export const getForecast = async (location: string): Promise<ForcastResponse> => {
        const response = await fetch(baseUrl + "/forecast?q=" + location);
        return response.json();    
}

export const getForecastByCoords = async (lat: number, lon: number): Promise<ForcastResponse> => {
    const response = await fetch(baseUrl + "/forecast?lat=" + lat + "&lon=" + lon);
    return response.json();
}
