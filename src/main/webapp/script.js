const apiKey = "a9c4f71ec088522bddff56e01de4c8bb";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  // Use city name + country code for better accuracy
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching data:", errorData);
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}


function displayWeather(data) {
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
  document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
