import './current-weather.css';
import { format, parseISO } from 'date-fns';


function CurrentWeather ({currentWeather}) {
    const icon = `http://openweathermap.org/img/w/${currentWeather?.weather[0].icon}.png`;

    return (
        <div className="container-fluid w-100">
            <div className="row"> 
                <div className="temperature col-2 d-flex justify-content-start">
                    {/* <i className="fa-solid fa-cloud"></i> */}
                    <img style={{width: '50px', height:'auto'}} src= {icon} />
                    <p>{Math.round(currentWeather?.temp)}°C</p>
                    
                </div>
                <div className="summary col-4">
                    <p>
                        UVI: {currentWeather?.uvi} <br />
                        Humidity: {currentWeather?.humidity}% <br />
                        Wind: {currentWeather?.wind_speed}mph <br />
                    </p>
                </div>
                <div className="date col-6 d-flex justify-content-end">
                    <p className="text-end">
                        Weather <br />
                        {/* {format(parseISO(currentWeather?.dt), "iii dd MMM HH:mm")} <br />  */}
                        {/* {currentWeather.weather && currentWeather.weather[0].main} <br /> */}
                    </p>
                </div>                
            </div>


        </div>

    )

}

export default CurrentWeather;



