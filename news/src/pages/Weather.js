import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/Weather.css';

function Weather() {
    const [weather, setWeather] = useState([])
    useEffect(()=>{
        axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=4acf4679874bc46391b2bf697d3ccbe5")
        .then((res)=>{
          console.log(res.data.list);
          setWeather(res.data.list)
        })
      },[])
    
  return (
    <div className="container my-5">
      <h1>Weather</h1>
      <br></br>
      <div className="row">
        {
          weather.map((val)=>{
            return (
              <div className="col-md-4 mb-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{val.dt_txt}</h5>
                    <p className="card-text">
                      {val.main.temp}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Weather