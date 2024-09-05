import './day.css';
import { format } from 'date-fns';

function Day({day}) {
    return (
        <div>
            <div className="day">{format(day[0].dt, 'eee')}</div> 
            <div className="icon"><i className="fa-solid fa-cloud"></i></div> 
            <div>
                <p className="tempMax">{Math.round(day[0].temp.max)}°</p> 
                <p className="tempMin">{Math.round(day[0].temp.min)}°</p>
            </div>
            
        </div>
    )
}

export default Day;