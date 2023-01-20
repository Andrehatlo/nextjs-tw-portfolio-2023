import { Weather } from '../components/weather';
import { Forcast } from '../components/forcast';
import { ButtonReload } from '../../components/buttons'
import {
    CloudIcon,
    CloudLightningIcon,
    FogIcon,
    RainIcon,
    SnowIcon,
    SunBehindCloudIcon,
    SunBehindLargeCloudIcon,
    SunBehindRainIcon,
    SunIcon,
} from '../../components/icons';
import { useForcast } from './weather.store';

type Location = {
    lat: number;
    lon: number;
}

