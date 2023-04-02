//import { key } from "./apiKey.mjs";
const key = ""; 

var searchedCity = "Dublin";
var cityName = document.querySelector('#cityName');
var main = document.querySelector('#main');
var temp = document.querySelector('#temperature');
var feel = document.querySelector('#feel');
var wind = document.querySelector('#wind');
var icon = document.getElementById('weatherIcon');

//search bar save input
function getCity(element){
    console.log(element.value);
    searchedCity = element.value;
}

//search button
function search(){
    console.log(searchedCity);
    apiCall(); 
}

// big-small onhover effect -- look into scaling effects JS
function biggerImg(element) {
    element.style.height = "160px";
    element.style.width = "160px";
 }
function normalImg(element) {
    element.style.height = "150px";
    element.style.width = "150px";
}

//Fetch Api Data
async function apiCall(){
    var response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity},CA,US&cnt=1&appid=${key}&units=imperial`);
    var apiData = await response.json();
    console.log(apiData); //all data
    var iconType = apiData.list[0].weather[0].icon;
    console.log('Icon value: ' + iconType);

    //DOM manipulation with api data values
    cityName.innerText = apiData.city.name;
    icon.src = `https://openweathermap.org/img/wn/${iconType}@2x.png`;
    main.innerText = apiData.list[0].weather[0].main;
    temp.innerText = Math.round(apiData.list[0].main.temp);
    feel.innerText = Math.round(apiData.list[0].main.feels_like);
    wind.innerText = Math.round(apiData.list[0].wind.speed)
}
apiCall();


















//Test with Dublin/Tokyo/Delhi/North Pole/Los Angeles/

//For 5 day forecast - loop through retrieved data - change cnt (count) in fetch url
//  for(var i=0; i<apiData.list.length; i+=8){
//      console.log(apiData.list[i].dt_txt + " ---> " + apiData.list[i].main.temp  + " ---> " /*+ JSON.stringify(apiData.list[i].weather)*/);

//console.log(apiData.list[0].weather[0].main); //main-weather retrieval
//console.log(apiData.list[0].main.temp);       //temperature retrieval
//console.log(apiData.list[0].main.feels_like); //real-feel retrieval
//console.log(apiData.list[0].wind.speed);      //wind speed retreval