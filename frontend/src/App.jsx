//1. Get the OpenWeather API data rendered correctly on app.jsx
//2. Create User Login Page along with JWT authentication
// Once api is working and user login is functiona
// 3.Create the backend 3a) create Postgresql db 3b)configure db with prisma 
//4. store user logins into db - store location input into db for each user - store weather data from each input
// 5. Create the backend 
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported if you're using it
import DataCard from './components/DataCard';
const App = () => {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);



  const [backgroundURL, setBackgroundUrl] = useState('https://source.unsplash.com/1600x900/?Chicago')
  // Function to fetch weather data
  const fetchWeatherData = async () => {
    if (!city) return;

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data); // Store weather data in state
      console.log(response.data); // Log the weather data to the console
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Effect to trigger the fetch when city changes
  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const handleFormChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div id='container' className='w-4/5 h-4/5' style={{ backgroundImage: `url(${backgroundURL})` }}>
      <div id='wrapper'>
        <div id='title'>
          <h1>Weather IO</h1>
        </div>
        <form id='form' onSubmit={handleSubmit}>
          <label>Enter a City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleFormChange}
          />
          <button type="submit">Submit</button>
        </form>

        {weatherData && <DataCard weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default App;
