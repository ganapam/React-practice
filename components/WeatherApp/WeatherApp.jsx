import React from 'react'
import '../WeatherApp/WeatherApp.css'
import search_icon from '../assests/search.png'
import clear_icon from '../assests/clear.png'
import cloud_icon from '../assests/cloud.png'
import drizzle_icon from '../assests/drizzle.png'
import rain_icon from '../assests/rain.png'
import snow_icon from '../assests/snow.png'
import wind_icon from '../assests/wind.png'
import humidity_icon from '../assests/humidity.png'
const WeatherApp = () => {
    let api_key="11330e75a8a83a647bc1232948121be8"
    const serach= async()=>{
        const element=document.getElementsByClassName("cityname")
        if(element[0].value==""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let reponse=await fetch(url);
        let data= await reponse.json();
        const humidity=document.getElementsByClassName("humidity-percent")
        const wind=document.getElementsByClassName("wind-rate")
        const temprature=document.getElementsByClassName("weather-temp")
        const location=document.getElementsByClassName("weather-location")
        humidity[0].innerHtml=data.main.humidity+"%";
        wind[0].innerHTML=data.wind.speed+"km/h";
        temprature[0].innerHtml=data.temp +"oC";
        location[0].innerHtml=data.name;

    }
  return (
    <div>
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className="cityinput" placeholder='Search'/>
                <div className='search-icon' onClick={()=>{serach()}}>
                    <img src={search_icon} alt="hello"/>
                </div>
            </div>
            <div className="weather-image">
            <img src={cloud_icon} alt="cloud_icon"/>
            </div>
            <div className="weather-temp">24.c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className='icon'/>
                    <div className="data">
                        <div className="humidity-percent">65%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className='icon'/>
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default WeatherApp
