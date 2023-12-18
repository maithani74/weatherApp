import React from 'react';
import './Style.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Card from './Card'
const Weather = () => {
    
    const [searchValue,SetSearchValue] = useState('dehradun')
        const [weatherInfo,setWeatherInfo] = useState({});
        const getData = async()=>{
                const res =await axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e77b2277a806ae3c6469a0e946bfe437`)
                const {main} = res.data.weather[0];
                const {temp,humidity,pressure} = res.data.main
                const {country,sunset} = res.data.sys
                const {name} = res.data;
                const {speed} = res.data.wind
                const newWeather = {
                    main,temp,humidity,pressure,country,sunset,speed,name
                }
                setWeatherInfo(newWeather);
            }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
        <div className="wrap">
            <div className="search">
                <input className='searchTerm' placeholder='Search...' value={searchValue} onChange={(e)=>SetSearchValue(e.target.value)} type='search' id='search' autoFocus/>
                    <button className='searchButton' type='button' onClick={getData}>
                        Search
                    </button>
            </div>
        </div>
        <Card weatherInfo={weatherInfo}/>
        
    </>
  );
}

export default Weather;
