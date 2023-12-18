import React, { useEffect, useState } from 'react';

const Card = ({weatherInfo}) => {
    const [weatherState,setWeatherState] = useState('');

    const { main,temp,humidity,pressure,country,sunset,speed,name} = weatherInfo;
    useEffect(()=>{
        if(main){
            switch (main) {
                case 'Rain': setWeatherState('wi-rain')
                    break;
                case 'Clouds': setWeatherState('wi-day-cloudy')
                    break;
                case 'Mist': setWeatherState('wi-dust')
                    break;
                case 'Clear': setWeatherState('wi-day-sunny')
                    break;
            
                default: setWeatherState('wi-day-sunny')
                    break;
            }
        }
    },[main])

    let now = sunset;
    let date = new Date(now*1000);
    let time = `${date.getHours()}:${date.getMinutes()}`
  return (
    <article className='widget'>
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}/>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span> {temp}</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                        {main} 
                    </div>
                    <div className="place">
                        {name} , {country}
                    </div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>

            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={'wi wi-sunset'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {time} pm <br/> Sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className={'wi wi-humidity'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {humidity}<br/> Humidity
                        </p>
                    </div>
                </div>
                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {pressure} <br/> Pressure
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-wind"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {speed} <br/> Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
  );
}

export default Card;
