import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [city,setCity]=useState('');
  const API_KEY='c6586a42afeb4c3ca3141816240408';
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  function getweather(e){
   
     const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
     fetch (url).then((response)=>{
      if(!response.ok){
        throw new Error('weather not there')

      }
      return response.json()

     })
     .then((data)=>{
      setWeatherData(data);
      setError(null); 
     })
  }
  return (
    // <div className="App">
    //   <header> hello world</header>
    // </div>
   
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
   <button onClick={getweather}>Get Weather</button>

      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Wind: {weatherData.current.wind_kph} kph</p>
        </div>
      )}
    </div>

  );
}

export default App;
