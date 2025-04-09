// const APIKEY = "6f4177084afe27b878d0d1d556efaeb2";
// const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f4177084afe27b878d0d1d556efaeb2&units=metric`;
let form = document.querySelector("form");
let search = document.querySelector("#search");
let weather = document.querySelector("#weather");
const url = `https://api.openweathermap.org/data/2.5/weather?q=Hapur&appid=6f4177084afe27b878d0d1d556efaeb2&units=metric`;

const getWeather = async (recieve) => {
  weather.innerHTML = `<h2>Loading...</h2>`;
  const response = await fetch(recieve);
  const data = await response.json();
  return showWeather(data);
};
getWeather(url);
const showWeather = (data) => {
  if (data.code == "404") {
    weather.innerHTML = `<h2>City Is Not Found</h2>`;
    return;
  }
  weather.innerHTML = `<div>   
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather">
        </div>
        <div>
            <h1>${data.main.temp}°C</h1>
            <h3>Weather Is ${data.weather[0].main}</h3>

        </div>`;
};

form.addEventListener("keyup", function (event) {
  if (event.target.value != ""){
    getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=6f4177084afe27b878d0d1d556efaeb2&units=metric`);
    event.preventDefault();
  } else {
    getWeather(url);
    event.preventDefault();
  }
});
