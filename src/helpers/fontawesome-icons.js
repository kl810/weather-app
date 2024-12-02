
export function getWeatherIcon(iconId) {

    // const iconId = data.current.weather[0].id
    // const iconImg = data.current.weather[0].icon


    if (iconId >= 200 && iconId <= 232) {
        return <i class="bi bi-cloud-lightning-rain-fill"></i>
    }
    if (iconId >= 300 && iconId <= 321) {
        return <i class="bi bi-cloud-drizzle-fill"></i>
    }
    if (iconId >= 500 && iconId <= 531) {
        return <i class="bi bi-cloud-rain-heavy-fill"></i>
    }
    if (iconId >= 600 && iconId <= 622) {
        return <i class="bi bi-snow2"></i>
    }
    if (iconId >= 701 && iconId <= 771) {
        return <i class="bi bi-cloud-haze2-fill"></i>
    }
    if (iconId === 781) {
        return <i class="bi bi-tornado"></i>
    }
    if (iconId === 800) {
        return <i class="bi bi-sun-fill"></i>
    }
    if (iconId === 801 || iconId === 802) {
        return <i class="bi bi-cloud-sun-fill"></i>
    }
    if (iconId === 803 || iconId === 804) {
        return <i class="bi bi-cloudy-fill"></i>
    }


    // switch(true) {
    //     case iconId >= 123 && iconId <= 321:
    //         return <i class="fa-solid fa-cloud-sun"></i>
    //     case 123:
    //         return <i class="fa-solid fa-cloud-moon"></i>
    //     default:
    //         return null
    // }

}