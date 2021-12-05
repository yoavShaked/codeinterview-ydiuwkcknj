import React, {useMemo} from "react";
import { Container, Label } from "./style";
import ForecastItem from '../ForecastItem';
import { useForecastContext } from "../ForecastProvider";

const Forecast = () => {
    const {allForecast} = useForecastContext();
    const renderForecastItem = ({id, ...rest}, index) => <ForecastItem key={`${id}-${index}`} {...rest}/>
    const memoizedForecast = useMemo(() => allForecast.map(renderForecastItem), [allForecast]);

    return <Container>
        <Label>
            Forecast
        </Label>
        <Container>
            {memoizedForecast}
        </Container>
    </Container>;
};



export default Forecast;