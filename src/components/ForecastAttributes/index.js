import React from "react";
import {useForecastContext} from "../ForecastProvider";
import {Container, ItemContainer, Title, MinMaxContainer} from './style';
import {WEATHER_STATES_TO_ICON} from "../../lib";
import Icon from '../common/Icon';
import { roundDecimal } from "../../utils"; 

const ForecastAttributes = () => {
    const {selectedForecast} = useForecastContext();

    if (!selectedForecast) 
        return null;
    
    const {
        weather_state_abbr,
        the_temp,
        max_temp,
        min_temp,
        humidity,
        wind_speed,
        air_pressure,
        predictability
    } = selectedForecast;

    return <Container>
        <ItemContainer>
            <Icon width={100} height={100} src={WEATHER_STATES_TO_ICON[weather_state_abbr]}/>
        </ItemContainer>
        <ItemContainer>
            <Title>
                {roundDecimal(the_temp)}
            </Title>
            <MinMaxContainer>
                <Title>
                    L: {roundDecimal(min_temp)}
                </Title>
                <Title>
                    H: {roundDecimal(max_temp)}
                </Title>
            </MinMaxContainer>
        </ItemContainer>
        <ItemContainer>
            <Title>
                Humidity
            </Title>
            <Title>
                {roundDecimal(humidity)} %
            </Title>
        </ItemContainer>
        <ItemContainer>
            <Title>
                Wind Speed
            </Title>
            <Title>
                {roundDecimal(wind_speed)} knots
            </Title>
        </ItemContainer>
        <ItemContainer>
            <Title>
            Air Pressure
            </Title>
            <Title>
                {roundDecimal(air_pressure)} millibars
            </Title>
        </ItemContainer>
        <ItemContainer>
            <Title>
                Predictability 
            </Title>
            <Title>
                {roundDecimal(predictability)} %
            </Title>
        </ItemContainer>
    </Container>
}

export default ForecastAttributes;