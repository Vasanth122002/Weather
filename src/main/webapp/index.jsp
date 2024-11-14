<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Weather App</h1>
    <div class="search-box">
      <input type="text" id="cityInput" placeholder="Enter city name...">
      <button onclick="getWeather()">Search</button>
    </div>
    <div id="weather" class="weather-box">
      <h2 id="cityName">City</h2>
      <img id="weatherIcon" src="" alt="Weather Icon" class="icon">
      <p id="temperature">Temperature: -- °C</p>
      <p id="description">Weather: --</p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
