import React, {useContext, createContext, useEffect, useReducer} from "react";
import {getWeatherForecast} from "../../weatherService";

const ForecastContext = createContext();

const SET_SELECTED_FORECAST = 'SET_SELECTED_FORECAST';
const SET_ALL_FORECAST = 'SET_ALL_FORECAST';

const initialState = {
    selectedForecast: null,
    allForecast: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_FORECAST: {
            const {allForecast} = action.payload;
            return {allForecast, selectedForecast: allForecast[0]}
        }
        case SET_SELECTED_FORECAST: {
            const {selectedForecast} = action.payload;
            return {...state, selectedForecast};
        }
        default: return state;
    }
}

const Main = ({children}) => {
    const [
        {
            selectedForecast,
            allForecast
        },
        dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getWeatherForecast().then((allForecast) => {
            dispatch({type: SET_ALL_FORECAST, payload: {
                    allForecast
                }})
        });
    }, []);

    const setSelectedForecast = (selectedForecast) => {
        dispatch({type: SET_SELECTED_FORECAST, payload: {
                selectedForecast
            }})
    }

    console.log('selectedForecast', selectedForecast)

    return <ForecastContext.Provider value={{
        setSelectedForecast, selectedForecast, allForecast
    }}>
        {children}
    </ForecastContext.Provider>

};

export const useForecastContext = () => useContext(ForecastContext);

export default Main;
