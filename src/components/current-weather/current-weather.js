import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">nameofcity</p>
          <p className="weather-description">desofcity</p>
        </div>
        <img className="weather-icon" src="/icons/01d.png" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C </p>
        <div className="details">
          <div className="parameter-row">
              <span className="parameter-label bold">Details</span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">Feel like</span>
              <span className="parameter-value">°C</span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">°C</span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">°C</span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
