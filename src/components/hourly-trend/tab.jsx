import {Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
import { Line, Bar } from 'react-chartjs-2';
import { transparentize, CHART_COLORS} from '../../helpers/charts';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
)


export function TabTemp({hourlyWeatherLables, hourlyTemperatures}) {

    return (
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
                                pointRadius: 5,
                                pointHoverRadius: 10
                            }
                        ],
                        labels: hourlyWeatherLables && hourlyWeatherLables.slice(0,13)
                    }
                } 
                options={

                    {

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
    )
};

export function TabHumidity({hourlyWeatherLables, hourlyHumidity}) {

    return (
    <div style={{height: '100px'}}>
        <Bar 
            data={
                {
                    datasets: [
                        {
                            data: hourlyHumidity && hourlyHumidity.slice(0,13),
                            borderColor: CHART_COLORS.blue,
                            backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
                            borderWidth: 2,
                            borderRadius: 5,
                            // borderSkipped: false,
                        }
                    ],
                    labels: hourlyWeatherLables && hourlyWeatherLables.slice(0,13)
                }
            } 
            options={

                {

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
)};


export function TabWindSpeed({hourlyWeatherLables, hourlyWindSpeed}) {
    return (
        <div style={{height: '100px'}}>
            <Bar 
                data={
                    {
                        datasets: [
                            {
                                data: hourlyWindSpeed && hourlyWindSpeed.slice(0,13),
                                borderColor: CHART_COLORS.blue,
                                backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
                                borderWidth: 2,
                                borderRadius: 5,
                                // borderSkipped: false,
                            }
                        ],
                        labels: hourlyWeatherLables && hourlyWeatherLables.slice(0,13)
                    }
                } 
                options={

                    {

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
    )
}
