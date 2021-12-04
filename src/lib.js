export const WEATHER_STATES_TO_ICON = {
    c: "fas fa-sun",
    lc: "fas fa-cloud-sun",
    hc: "fas fa-cloud",
    lr: "fas fa-cloud-sun-rain",
    hr: "fas fa-cloud-showers-heavy"
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
