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

// let city equal whatever is in the input field
let city = "";

//other variables
let inputValue = document.querySelector(".inputValue")
let button = document.querySelector('#search-button')
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

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=bc187066e8df862ebc540da9d166d0a3')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => alert("Incorrect City Entered, Try Again!"))
})

//clear code
function clearSearches(event){
    event.preventDefault();
    cityArray=[];
    localStorage.removeItem("cityname")
    document.location.reload();
}


function loadLastCity(){
    $("ul").empty();
    var cityArray = JSON.parse(localStorage.getItem(cityname));
    if(cityArray!==null){
        cityArray=JSON.parse(localStorage.getItem("cityname"));
        for(i=o; I<cityArray.length;i++){
            addToList(cityArray[i]);
        }
        city=cityArray[i-1];
        currentWeather(city);
    }
}

//handler code

$("#clear-button").on('click',clearSearches);
$(document).on('click',getPastSearch);
$(window).on('load',loadLastCity);