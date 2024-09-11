
export function getWeatherIcon(iconId) {

    // const iconId = data.current.weather[0].id
    // const iconImg = data.current.weather[0].icon


    if (iconId >= 200 && iconId <= 232) {
        return <i class="fa-solid fa-cloud-bolt"></i>
    }
    if (iconId >= 300 && iconId <= 321) {
        return <i class="fa-solid fa-cloud-rain"></i>
    }
    if (iconId >= 500 && iconId <= 531) {
        return <i class="fa-solid fa-cloud-showers-heavy"></i>
    }
    if (iconId >= 600 && iconId <= 622) {
        return <i class="fa-regular fa-snowflake"></i>
    }
    if (iconId >= 701 && iconId <= 771) {
        return <i class="fa-solid fa-smog"></i>
    }
    if (iconId === 781) {
        return <i class="fa-solid fa-tornado"></i>
    }
    if (iconId === 800) {
        return <i class="fa-brands fa-skyatlas"></i>
    }
    if (iconId === 801 && iconId === 802) {
        return <i class="fa-solid fa-cloud-sun"></i>
    }
    if (iconId === 803 && iconId === 804) {
        return <i class="fa-solid fa-cloud"></i>
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