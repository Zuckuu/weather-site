import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);
  
  return (
    <div className="container">
      <div className="greeting_nav">
        <h1>Hello, How's the weather in...</h1>
        <a
          href="https://github.com/Zuckuu/weather-site"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <a
          href="https://zacks-website.vercel.app/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          For More
        </a>
      </div>
      <Search onSearchChange={handleOnSearchChange} className="search_bar" />
      <CurrentWeather />
    </div>
  );
}

export default App;
