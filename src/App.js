import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

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
      <CurrentWeather/>
    </div>
  );
}

export default App;
