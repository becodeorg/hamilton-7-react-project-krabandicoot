import { useState } from "react";
import axios from 'axios';

const Submit = (props) => {

    const APIKey = "34ae58ff2928a6a90a6f8880c179df20"
    const [weatherData, setweather] = useState ([{}])
    const [cityData, setcity] = useState("")
    const getWeather = async (event) =>{
        if(event.key === "Enter"){
            await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityData}}&appid=${APIKey}`)
            .then((response) => response.json())
            .then((data)=> {
                setweather(data)
                setcity("")
            })
        }
    }
    return(
        <header>
            <input className="text-red-600"
            placeholder="Enter a city..."
            value={cityData}
            onKeyPress={getWeather}
            onChange={e => setcity(e.target.value)}
            />
            {typeof setweather.main === "undefined" ?
            (<div>
                <p>Bruh</p>
            </div>)
            :
            (<div>
                <p>{weatherData.name}</p>
            </div>

            )}
            
            
        </header>
    )
    
}

export default Submit