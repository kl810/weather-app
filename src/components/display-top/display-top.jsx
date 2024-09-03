import './display-top.css';


function DisplayTop () {
    

    return (
        <div className="container d-flex">
            <div className="row"> 
                <div className="temperature col-2">
                    <i className="fa-solid fa-cloud"></i>
                    <p>21C</p>
                </div>
                <div className="summary col-4">
                    <p>
                        Precipitation: 35% <br />
                        Humidity: 79% <br />
                        Wind: 6mph <br />
                    </p>
                </div>
                <div className="date col-4">
                    <p className="text-end">
                        Weather <br />
                        Monday 14:00 <br />
                        Cloudy <br />
                    </p>
                </div>                
            </div>


        </div>

    )

}

export default DisplayTop;