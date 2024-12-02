import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

const DEFAULT_WEATHER_INFO = {
  city: "Delhi",
  feelslike: 24.84,
  temp: 25.05,
  tempMin: 25.05,
  tempMax: 25.05,
  humidity: 47,
  weather: "haze",
};

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(DEFAULT_WEATHER_INFO);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h2>Weather App by Piyush</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
