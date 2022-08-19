var searchbar = document.getElementById("searchbar");
// var searchbar = $("#searchbar");
var searchbtn = $(".searchbtn");

var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");
var uv = $("#uv");

// 0e68794d803126cda81a8f7ef2182cd1


function getWeather() {
    console.log(searchbar.value)
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchbar.value + '&appid=0e68794d803126cda81a8f7ef2182cd1'

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
      
    .catch(err => alert("Sorry this city is unavailable!"))
}

// getWeather()

searchbtn.on("click", getWeather) 