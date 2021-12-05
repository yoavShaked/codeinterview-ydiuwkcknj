import React, {useMemo} from "react";
import {WEATHER_STATES_TO_ICON} from '../../lib';
import {Container, Label, Row} from './style';
import Icon from "../common/Icon";
import {useForecastContext} from "../ForecastProvider";
import {roundDecimal, formatDate} from '../../utils';

const ForecastItem = ({
    weather_state_abbr,
    weather_state_name,
    applicable_date,
    min_temp,
    max_temp,
    ...rest
}) => {
    const {setSelectedForecast} = useForecastContext();

    const onClick = () => setSelectedForecast({
        weather_state_abbr,
        weather_state_name,
        applicable_date,
        min_temp,
        max_temp,
        ...rest
    });

    const memoizedFormattedDate = useMemo(() => formatDate(applicable_date), [applicable_date]);

    return <Container onClick={onClick}>
        <Row>
            <Icon src={WEATHER_STATES_TO_ICON[weather_state_abbr]}/>
            <Label>
                {memoizedFormattedDate}
            </Label>
        </Row>
        <Row>
            <Label>
                L: {roundDecimal(min_temp)}
            </Label>
            <Label>
                H: {roundDecimal(max_temp)}
            </Label>
        </Row>
    </Container>
};

export default ForecastItem;