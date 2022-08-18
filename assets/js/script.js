var temp = document.getElementById('temp');

function getWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=phoenix&APPID=0e68794d803126cda81a8f7ef2182cd1'

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch(err => alert("Sorry this city is unavailable!"))
}

getWeather()