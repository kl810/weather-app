import './input-city.css'

function InputCity({city, setCity}) {

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleInputChange(e) {
        setCity(e.target.value)
        console.log(e.target.value)
    }


    return(
        <div className="input-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleInputChange}
                />
                <button className="search-btn" type="submit"><i class="bi bi-search"></i></button>
            </form>
        </div>
    )
}

export default InputCity;