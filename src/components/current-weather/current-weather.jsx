import './current-weather.css';
import { format, fromUnixTime } from 'date-fns';
import { getWeatherIcon } from '../../helpers/fontawesome-icons';



function CurrentWeather ({currentWeather}) {

    return (
        <div className="container-fluid w-100">
            <div className="row"> 
                <div className="temperature col-2 d-flex inline text-center">
                    {currentWeather && getWeatherIcon(currentWeather.weather[0].id)}
                    {/* <img style={{width: '50px', height:'auto'}} src= {icon} alt="weather icon" /> */}
                    <p>{Math.round(currentWeather?.temp)}&deg;C</p>
                    
                </div>
                <div className="summary col-2">
                    <p>
                        UVI: {currentWeather?.uvi} <br />
                        Humidity: {currentWeather?.humidity}% <br />
                        Wind: {currentWeather?.wind_speed}mph <br />
                    </p>
                </div>
                <div className="date col-8 d-flex justify-content-end">
                    <p className="text-end">
                        Weather <br />
                        {currentWeather && format(fromUnixTime(currentWeather.dt), "iii dd MMM HH:mm")} <br /> 
                        {/* Check if 'currentWeather' is true - then execute following function */}
                        {currentWeather && currentWeather.weather[0].description} <br />
                    </p>
                </div>                
            </div>


        </div>

    )

}

export default CurrentWeather;




