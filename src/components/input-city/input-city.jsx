import { useRef } from 'react'
import './input-city.css'

function InputCity({setCity}) {

    const inputRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        setCity(inputRef.current.value)
    }

    return(
        <div className="input-wrapper">
            <form onSubmit={handleSubmit}> {/* Search for entire word when input is submitted instead of searching for every single letter during input */}
                <input
                type="text"
                placeholder="Enter city name"
                ref={inputRef}
                />
                <button className="search-btn" type="submit"><i class="bi bi-search"></i></button>
            </form>
        </div>
    )
}

export default InputCity;