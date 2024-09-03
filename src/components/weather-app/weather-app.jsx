import './weather-app.css';
import DisplayTop from '../display-top/display-top';
import HourlyTrend from '../hourly-trend/hourly-trend';
import WeeklySummary from '../weekly-summary/weekly-summary';

export default function WeatherApp (){
    return (
        <div>
            <DisplayTop />
            <HourlyTrend />
            <WeeklySummary />

        </div>
    );
}