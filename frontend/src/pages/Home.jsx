import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
// User will login

const Home = () => {
    const { currentUser } = useAuth()

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [backgroundURL, setBackgroundUrl] = useState('https://source.unsplash.com/1600x900/?Chicago')


    // Function to fetch weather data
    const fetchWeatherData = async () => {

        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        if (!city) return;
        try {
            const response = await axios.get(url);
            setWeatherData(response.data); // Store weather data in state
            console.log(response.data); // Log the weather data to the console
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    //   Only sends request to OpenWeather API when user submits the form 
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
    };


    return (
        <div id='container' className='w-4/5 h-4/5' style={{ backgroundImage: `url(${backgroundURL})` }}>
            Welcome {currentUser.displayname ? currentUser.displayName : currentUser.email}, you are logged in and ready to use WeatherIO!
            <div id='wrapper'>
                <div id='title'>
                    <h1>Weather IO</h1>
                </div>
                <form id='form' onSubmit={handleSubmit}>
                    <label>Enter a City</label>
                    <br />
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                {weatherData && <DataCard weatherData={weatherData} />}
            </div>
        </div>
    );
};



export default Home