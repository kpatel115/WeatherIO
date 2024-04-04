import { useState } from 'react'

//1. Get the OpenWeather API data rendered correctly on app.jsx
//2. Create User Login Page along with JWT authentication
// Once api is working and user login is functiona
// 3.Create the backend 3a) create Postgresql db 3b)configure db with prisma 
//4. store user logins into db - store location input into db for each user - store weather data from each input
// 5. Create the backend 
import './App.css'
const api_key = process.env('WEATHER_API_KEY')
function App() {

  const api_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}`

  return (
    <>

    </>
  )
}

export default App
