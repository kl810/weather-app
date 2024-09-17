

function InputCity({city, setCity}) {

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleInputChange(e) {
        setCity(e.target.value)
        console.log(e.target.value)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleInputChange}
                />
                <button type="submit">Get Weather</button>
            </form>
        </div>
    )
}

export default InputCity;