import data from './DATA.json';
import city from './DATA-CITY.json';

export function getWeatherData() {
    console.log('I am mock')
    return new Promise((resolve, reject) => {
        resolve(data) //line 1170
    })
}

export function getCityData(){
    console.log('I am mock city')
    return new Promise((resolve, reject) => {
        resolve(city)
    })
}
