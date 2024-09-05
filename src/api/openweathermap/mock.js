import data from './DATA.json'

export function getWeatherData() {
    return new Promise((resolve, reject) => {
        resolve(data) //line 1170
    })
}
