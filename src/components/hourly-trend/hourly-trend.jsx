import './hourly-trend.css';
import { Link, Routes, Route } from 'react-router-dom';
import { format, fromUnixTime } from 'date-fns';
import {Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'react-chartjs-2';
import { transparentize, CHART_COLORS} from '../../helpers/charts';
import Tab from './tab';


Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
)



function HourlyTrend ({hourlyWeather}) {

    const hourlyWeatherLables = hourlyWeather && hourlyWeather.map(hour => format(fromUnixTime(hour.dt), 'HH:mm'))
    console.log(hourlyWeatherLables && hourlyWeatherLables.slice(0,13))
    const hourlyTemperatures = hourlyWeather && hourlyWeather.map(hour => hour.temp)
    console.log(hourlyTemperatures && hourlyTemperatures.slice(0,13))

    return (
        <>
            <div className="links nav nav-tabs">

                <li className="nav-item">
                    <Link to={`/`} className="link nav-link">Temperature</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/rainfall`} className="link nav-link">Rainfall</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/humidity`} className="link nav-link">Humidity</Link>    
                </li>
                
            </div>
            <div className="tabs">
                <Routes>
                    <Route path={`/`} element={<Tab name="temperature" />} />
                    <Route path={`/rainfall`} element={<Tab name="rainfall" />} />
                    <Route path={`/humidity`} element={<Tab name="humidity" />} />
                </Routes>
            </div>

            <div style={{height: '100px'}}>
                <Line 
                    data={
                        {
                            datasets: [
                                {
                                    data: hourlyTemperatures && hourlyTemperatures.slice(0,13),
                                    borderColor: CHART_COLORS.red,
                                    backgroundColor: transparentize(CHART_COLORS.red, 0.5),
                                    pointStyle: 'circle',
                                    pointRadius: 10,
                                    pointHoverRadius: 15
                                }
                            ],
                            labels: hourlyWeatherLables && hourlyWeatherLables.slice(0,13)
                        }
                    } 
                    options={

                        {
                            // actions: {
                            //     name: 'pointStyle: circle (default)',
                            //     handler: (chart) => {
                            //       chart.data.datasets.forEach(dataset => {
                            //         dataset.pointStyle = 'circle';
                            //       });
                            //       chart.update();
                            //     }
                            //   },


                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                  grid: {
                                    display: false
                                  },
                                  border: {
                                    display: false
                                  }
                                },
                                y: {
                                    ticks: {
                                        stepSize: 2
                                     },
                                  grid: {
                                    display: false
                                  },
                                  border: {
                                    display: false
                                  }
                                }
                              }
                        }
                    }
                />
            </div>
        </>
    )
}

export default HourlyTrend;



                {/* <li className="nav-item">
                    <a className="nav-link active" href="#">Temperature</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Rainfall</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Humidity</a>
                </li> */}


