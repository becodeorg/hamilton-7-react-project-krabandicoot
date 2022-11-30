import { useState, useEffect }  from "react";
import axios from 'axios';

function GetData(props){
    const APIKey = "34ae58ff2928a6a90a6f8880c179df20";
    const[datas, setData] = useState([]);
    const cityName = props.name;
    
    useEffect((props) =>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${APIKey}`)
        .then(res =>{
            setData(res.data)
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[]);

    return(
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {   
                Object.keys(datas.list).map((main,i) =>
                        <div className="relative bg-white bg-opacity-60 py-2 px-6 rounded-3xl w-66 my-2 shadow-xl">
                            <div className="mt-12 break-words">
                                <p className="text-xl font-semibold">{main}</p>
                            </div>                                
                        </div>
                        )
            }
        </div>
    )
}

export default GetData;