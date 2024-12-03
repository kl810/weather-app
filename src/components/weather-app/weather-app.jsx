import './weather-app.css';
import { useState, useEffect } from 'react';
import InputCity from '../input-city/input-city';
import CurrentWeather from '../current-weather/current-weather';
import HourlyTrend from '../hourly-trend/hourly-trend';
import WeeklySummary from '../weekly-summary/weekly-summary';
import openWeatherApi from '../../api/openweathermap';


export default function WeatherApp () {
    const [city, setCity] = useState('London')
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
      // Load weather data AFTER we have coordinates
      
      const loadWeatherData = async () => {
        const cityWeather = await openWeatherApi.getCityData(city)
        const weather = await openWeatherApi.getWeatherData(cityWeather.coord.lat, cityWeather.coord.lon)
        setWeatherData(weather)
      }

      loadWeatherData()
      
    }, [city])



    return (
        <div>
            <InputCity city={city} setCity={setCity}/>
            <CurrentWeather currentWeather={weatherData.current} city={city}/>
            <HourlyTrend hourlyWeather={weatherData.hourly}/>
            <WeeklySummary dailyWeather={weatherData.daily}/>
        </div>
    );
}


