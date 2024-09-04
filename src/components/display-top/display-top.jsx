import './display-top.css';
import { useEffect, useState } from 'react';
import { getWeatherToday } from '../../api/tomorrow.io/mock';
import { format } from 'date-fns';


function DisplayTop () {

    const [currentWeather, setCurrentWeather] = useState({})

    const loadWeatherToday = async () => {
      const weatherToday = await getWeatherToday()    
      setCurrentWeather(weatherToday)
    }

    useEffect(() => {
      loadWeatherToday()
      //next
    }, [])


console.log(currentWeather.time?.toDateString())

    return (
        <div className="container-fluid w-100">
            <div className="row"> 
                <div className="temperature col-2 d-flex justify-content-start">
                    <i className="fa-solid fa-cloud"></i>
                    <p>{Math.round(currentWeather.temperatureAvg)}C</p>
                    
                </div>
                <div className="summary col-4">
                    <p>
                        Precipitation: {currentWeather.precipitationProbabilityAvg} <br />
                        Humidity: {currentWeather.humidityAvg} <br />
                        Wind: {currentWeather.windSpeedAvg}mph <br />
                    </p>
                </div>
                <div className="date col-6 d-flex justify-content-end">
                    <p className="text-end">
                        Weather <br />
                        {currentWeather.time && format(currentWeather.time, 'eee dd MMM HH:mm')} <br /> {/* {currentWeather.time?.toDateString()} */}
                        Cloudy <br />
                    </p>
                </div>                
            </div>


        </div>

    )

}

export default DisplayTop;



