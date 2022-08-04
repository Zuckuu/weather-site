import "./current-weather.css"

import React from 'react';

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">nameofcity</p>
        <p className="weather-description">desofcity</p>
      </div>
      <img className="weather-icon" src="" alt="weather" />
    </div>
  );
}

export default CurrentWeather;
