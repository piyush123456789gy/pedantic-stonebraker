import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b1c8f32fe121783d2a4796c28fc1b7a1";

  //   const getWeatherInfo = async () => {
  //     try {
  //       let response = await fetch(
  //         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  //       );
  //       let jsonResponse = await response.json();
  //       console.log(jsonResponse);
  //       let result = {
  //         city: city,
  //         temp: jsonResponse.main.temp,
  //         tempMin: jsonResponse.main.temp_min,
  //         tempMax: jsonResponse.main.temp_max,
  //         humidity: jsonResponse.main.humidity,
  //         feelsLike: jsonResponse.main.feels_like,
  //         weather: jsonResponse.weather[0].description,
  //       };
  //       console.log(result);
  //       return result;
  //     } catch (err) {
  //       throw err;
  //     }
  //   };
  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Handle API errors
      if (!response.ok) {
        throw new Error("City not found");
      }

      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      console.error(err.message);
      throw err; // Pass the error to the caller
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  //   const handleSubmit = async (evt) => {
  //     try {
  //       evt.preventDefault();
  //       console.log(city);
  //       setCity("");
  //       let newInfo = await getWeatherInfo();
  //       updateInfo(newInfo);
  //     } catch (err) {
  //       setError(false);
  //     }
  //   };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false);
    setLoading(true); // Start loading
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city-"
          label="City Name"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Button variant="contained" type="submit">
            Search
          </Button>
        )}
        {error && (
          <p style={{ color: "red" }}>City not found. Please try again.</p>
        )}
      </form>
    </div>
  );
}
