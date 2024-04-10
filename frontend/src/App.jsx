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
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';


const App = () => {

  ////////////////////////////////////////////////////////////////////////////////////////
  // This code was not necessary and created problems for the app
  // every time the user entered a letter in the input it would fetch from the api

  // // Effect to trigger the fetch when city changes
  // useEffect(() => {
  //   if (city) {
  //     fetchWeatherData();
  //   }
  // }, [city]);

  // const handleFormChange = (event) => {
  //   setCity(event.target.value);
  // };
  /////////////////////////////////////////////////////////////////////


  return (
    <Router>
      <div>
        <h1>Weather IO</h1>
        <Routes/>
      </div>
    </Router>
  );
};

export default App;
