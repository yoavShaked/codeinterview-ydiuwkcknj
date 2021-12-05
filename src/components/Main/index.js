import React from 'react';
import Forecast from '../Forecast';
import ForecastAttributes from '../ForecastAttributes';
import ForecastProvider from '../ForecastProvider';
import {Container} from './style';

const Main = () => (
    <ForecastProvider>
        <Container>
        <Forecast/>
        <ForecastAttributes/>
        </Container>
    </ForecastProvider>
)

export default Main;