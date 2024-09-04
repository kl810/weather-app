import data from './DATA.json'

export function getWeatherToday() {
    return new Promise((resolve, reject) => {
        resolve({...data.timelines.daily[0].values, time: new Date(data.timelines.daily[0].time)})
    })
}
