// let city equal whatever is in the input field
let city = "";

//other variables
let searchedCity = "#searched-city"
let searchButton = "#search-button"
let clearSearch = '#clear-button'
let currentCity = "#current-city"
let cityTemp = "#city-temperature"
let cityHum = "#city-humidity"
let cityWind = "#city-wind-speed"
let cityUV = "#city-UV-index"
let cityArray = [];


// does the city that the user searches already exist within localstorage, or do we have to work again

function find(city) {
    for (var i=0 ; i<cityArray.length; i++) {
        if(city.toUppercase()===cityArray[i]){
            return -1;
        }
    }
    return 1;
}
//where the program will get my eventual API key
let APIKey = "bc187066e8df862ebc540da9d166d0a3"

//get current and future weather in the form of forecast after searching for city
function getWeather(event) {
    event.preventDefault();
    if(searchedCity.valueOf()!==""){
        city=searchedCity.val();
        currentWeather(city);
    }
}

// Call function
function currentWeather(city){
    let queryURL="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){

        console.log(response);

        let weathericon= response.weather[0].icon;
        let iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";

        let date=new Date(response.dt*1000).toLocaleDateString();


        $(currentCity).html(response.name + "("+date+")" + "<img src=" +iconurl+">");
        
        //temp
        let tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(cityTemp).html((tempF).toFixed(2)+"&#8457");

        //hum
        $(cityHum).html(response.main.humidity+"%");

        //wind speed
        let ws=response.wind.speed;
        let windspeedmph = (ws*2.237).toFixed(2);
        $(cityWind).html(windsmph + "MPH");
    })
}
//Get forecast
function forecast(cityid){
    var dayover=false;
    var queryforcastURL="https://api.openweathermap.org/data/2.5/forecast?id="+cityid+"&appid="+APIKey;
    $.ajax({
        url:queryforcastURL,
        method:"GET"
    }).then(function(response){
        for (i=0;i<5;i++){

    })
//css framework using tailwind
tailwind.config = {
    theme: {
      extend: {
          fontFamily: {
              sans: ['Josefin Slab', 'serif']
          }
      }
    }
}