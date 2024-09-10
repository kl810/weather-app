import './weather-app.css';
import { useState, useEffect } from 'react';
import CurrentWeather from '../display-top/current-weather';
import HourlyTrend from '../hourly-trend/hourly-trend';
import WeeklySummary from '../weekly-summary/weekly-summary';
import { getWeatherData } from '../../api/openweathermap/mock';


export default function WeatherApp () {

    const [weatherData, setWeatherData] = useState({})

    const loadWeatherData = async () => {
        const weather = await getWeatherData()    
        setWeatherData(weather)
      }
  
      useEffect(() => {
        loadWeatherData()
      }, [])


    return (
        <div>
            <CurrentWeather currentWeather={weatherData.current}/>
            <HourlyTrend hourlyWeather={weatherData.hourly}/>
            <WeeklySummary dailyWeather={weatherData.daily} selected={false}/>
        </div>
    );
}


