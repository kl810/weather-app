import './weekly-summary.css';
import Day from './day';

function WeeklySummary({dailyWeather}) {
    
    // console.log(dailyWeather)

    return (
        <div className="weekly-summary">
            {dailyWeather && dailyWeather.map((day, i) => <Day key={i} day={day}/>)}

        </div>
    )
}

export default WeeklySummary;