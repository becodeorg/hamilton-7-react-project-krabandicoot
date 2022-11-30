import { useState } from 'react';
import './App.css';
import GetData from './components/GetData';

const WeatherApp = () => {
  const[cityname, setCity] = useState("")
  const getCity = (event) =>{
      if(event.key === "Enter")
      {
        setCity("")
      }
  }
  return (
    <div className="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Check out the weather ! 
        </label>
        <input 
        value={cityname}
        onKeyPress={getCity}
        onChange={e => setCity(e.target.value)}
        className="appearance-none block w-full bg-white-200 text-gray-700 border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Fill out with a city name and press 'Enter' " />
        <GetData name='london'/>
      </div>
    </div>
  )
}

export default WeatherApp;
