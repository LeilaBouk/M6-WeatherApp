// var searchbar = document.getElementById("searchbar");
var searchbar = $("#searchbar")[0];
var searchbtn = $(".searchbtn");

var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");
var uv = $("#uv");


// 0e68794d803126cda81a8f7ef2182cd1


function getWeather(event) {
    // Prevent page reload
    event.preventDefault();
    console.log(`Searched weather in ${searchbar.value}`)
    // This is the URL to the API
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchbar.value + '&units=imperial&appid=0e68794d803126cda81a8f7ef2182cd1'

    // This fetch request gets the info
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
      
    .catch(err => alert("Sorry this city is unavailable!"))

    // Uncomment below code if I decide I want the search bar to clear 
    // searchbar.value = "";
}

// getWeather()

searchbtn.on("click", getWeather) 

// BREAKING IT DOWN CAUSE I HAVE A HEADACHE

// CALL THE INFO NEEDED 
// 5 day forecast
// city temp, uv, humid, wind

// SAVE RECENTLY SAVED CITIES TO LOCAL STORAGE

// API CALL FOR RECENTLY SAVED CITIES BUT IN LIL BOXES