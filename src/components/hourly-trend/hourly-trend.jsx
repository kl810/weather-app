import './hourly-trend.css';
import { Link, Routes, Route } from 'react-router-dom';
import { format, fromUnixTime } from 'date-fns';
import { TabTemp, TabHumidity, TabWindSpeed } from './tab';


function HourlyTrend ({hourlyWeather}) {

    const hourlyWeatherLables = hourlyWeather && hourlyWeather.map(hour => format(fromUnixTime(hour.dt), 'HH:mm'))
    // console.log(hourlyWeatherLables && hourlyWeatherLables.slice(0,13))
    const hourlyTemperatures = hourlyWeather && hourlyWeather.map(hour => hour.temp)
    const hourlyHumidity = hourlyWeather && hourlyWeather.map(hour => hour.humidity)
    const hourlyWindSpeed = hourlyWeather && hourlyWeather.map(hour => hour.wind_speed)
    // console.log(hourlyWindSpeed && hourlyWindSpeed.slice(0,13))

    return (
        <div>
            <div className="links nav nav-tabs">

                <li className="nav-item">
                    <Link to={`/`} className="link nav-link">Temperature</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/humidity`} className="link nav-link">Humidity</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/wind`} className="link nav-link">Wind</Link>    
                </li>
                
            </div>
            <div className="tabs">
                <Routes>
                    <Route path={`/`} element={<TabTemp hourlyWeatherLables={hourlyWeatherLables} hourlyTemperatures={hourlyTemperatures}/>} />
                    <Route path={`/humidity`} element={<TabHumidity hourlyWeatherLables={hourlyWeatherLables} hourlyHumidity={hourlyHumidity} />} />
                    <Route path={`/wind`} element={<TabWindSpeed hourlyWeatherLables={hourlyWeatherLables} hourlyWindSpeed={hourlyWindSpeed} />} /> 
                </Routes>
            </div>
        </div>
    )}

export default HourlyTrend;