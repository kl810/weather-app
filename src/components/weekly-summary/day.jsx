import './day.css';
import { format, fromUnixTime } from 'date-fns';

function Day({day}) {
    return (
        <div>
            <div className="day">{format(fromUnixTime(day.dt), 'eee')}</div> 
            <div className="icon"><i className="fa-solid fa-cloud"></i></div> 
            <div>
                <p className="tempMax">{Math.round(day.temp.max)}°</p> 
                <p className="tempMin">{Math.round(day.temp.min)}°</p>
            </div>
            
        </div>
    )
}

export default Day;