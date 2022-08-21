// var searchbar = document.getElementById("searchbar");
var searchbar = $("#searchbar")[0];
var searchbtn = $(".searchbtn");

// MAIN CARD
var cityName = $("#cityName")[0];
var temps = $("#temp")[0];
var wind = $("#wind")[0];
var humidity = $("#humidity")[0];
var feelslike = $("#feels")[0];


var apiKey = "0e68794d803126cda81a8f7ef2182cd1";


// MAIN WEATHER
function getWeather(event) {
    // Prevent page reload
    event.preventDefault();
    console.log(`Searched weather in ${searchbar.value}`)
    var searchedCity = searchbar.value;
    // This is the URL to the API
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&units=imperial&appid=${apiKey}` 

    // This fetch request gets the info
    fetch(apiUrl)
    .then(response => response.json())

    .then(function (data) {
        console.log(data)

        cityName.textContent = searchedCity;
        temps.textContent = `Temperature: ${data.main.temp}`;
        feelslike.textContent = `Feels Like: ${data.main.feels_like}`;
        wind.textContent = `Wind Speed: ${data.wind.speed}`;
        humidity.textContent = `Humidity: ${data.main.humidity}`;
    })

    // 5 DAY

    var DayApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchbar.value}&units=imperial&appid=${apiKey}` 

    fetch(DayApiUrl)
    .then(response => response.json())

    .then(function (data) {
        console.log(data)

    })
      
    // .catch(err => alert("Sorry this city is unavailable!"))

    //Clear searchbar
    searchbar.value = "";
}


// getWeather()

searchbtn.on("click", getWeather) 

// BREAKING IT DOWN CAUSE I HAVE A HEADACHE

// CALL THE INFO NEEDED 
// 5 day forecast *in progress*
// city temp, uv, humid, wind *check*

// SAVE RECENTLY SAVED CITIES TO LOCAL STORAGE

// API CALL FOR RECENTLY SAVED CITIES BUT IN LIL BOXES