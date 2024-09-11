import './day.css';
import { format, fromUnixTime } from 'date-fns';
import { getWeatherIcon } from '../../helpers/fontawesome-icons';

function Day({day}) {
    return (
        <div>
            <div className="day">{format(fromUnixTime(day.dt), 'eee')}</div> 
            <div className="icon">{day && getWeatherIcon(day.weather[0].id)}</div> 
            <div>
                <p className="tempMax">{Math.round(day.temp.max)}°</p> 
                <p className="tempMin">{Math.round(day.temp.min)}°</p>
            </div>
            
        </div>
    )
}

export default Day;