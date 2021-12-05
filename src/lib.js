import sunIcon from './icons/sun.png';
import cloudyIcon from './icons/cloudy.png';
import cloudIcon from './icons/cloud.png';
import rainyIcon from './icons/rainy-day.png';
import rainIcon from './icons/rain.png';

export const WEATHER_STATES_TO_ICON = {
    c: sunIcon,
    lc: cloudyIcon,
    hc: cloudIcon,
    lr: rainyIcon,
    hr: rainIcon
};

export const weatherProps = [
    {
        label: "Humidity",
        propName: "humidity",
        units: "%"
    },
    {
        label: "Wind Speed",
        propName: "wind_speed",
        units: "knots"
    },
    {
        label: "Air Pressure",
        propName: "air_pressure",
        units: "millibars"
    },
    {
        label: "Predictability",
        propName: "predictability",
        units: "%"
    }
];
