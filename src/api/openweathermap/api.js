// TODO: Remove API key
const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'api.openweathermap.org'

export async function getCityData(city) {

    const url = `https://${BASE_URL}/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&exclude=minutely`
    const res = await fetch(url)
    const citydata = await res.json()
    
    return citydata
}

export async function getWeatherData(lat,long) {

    const url = `https://${BASE_URL}/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&exclude=minutely`
    const res = await fetch(url)
    const data = await res.json()
    
    return data
}
