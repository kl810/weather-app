import './current-weather.css';
import { format, fromUnixTime } from 'date-fns';
import { getWeatherIcon } from '../../helpers/fontawesome-icons';



function CurrentWeather ({currentWeather, city}) {

    return (
        <div className="container-fluid w-100">
            <div className="row"> 
                <div className="temperature col-2 d-flex inline text-center space-between">
                    {currentWeather && getWeatherIcon(currentWeather.weather[0].id)}
                    <p>{Math.round(currentWeather?.temp)}<sup>&deg;C</sup></p>
                    
                </div>
                <div className="summary col-2 text-start">
                    <p>
                        UVI: {currentWeather?.uvi} <br />
                        Humidity: {currentWeather?.humidity}% <br />
                        Wind: {currentWeather?.wind_speed}mph <br />
                    </p>
                </div>
                <div className="col-8 d-flex justify-content-end">
                    <div className="date text-end">
                        <p>{city}</p>
                        {currentWeather && format(fromUnixTime(currentWeather.dt), "iii dd MMM HH:mm")} <br /> 
                        {/* Check if 'currentWeather' is true - then execute following function */}
                        {currentWeather && currentWeather.weather[0].description} <br />
                    </div>
                </div>                
            </div>


        </div>

    )

}

export default CurrentWeather;




