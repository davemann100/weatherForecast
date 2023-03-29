//import { key } from "./apiKey.mjs";
const key = 0; 


var currentCity = "";
var cityInput = document.querySelector('#citySearch');
var cityName = document.querySelector('#cityName');

function getCity(event){
    console.log(event.target.value);
    currentCity = event.target.value;
}
cityInput.addEventListener('input', getCity)


function search(){
    cityName.innerHTML = currentCity; 
}


//Fetch Api Data
async function apiCall(){
    var response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity},CA,US&cnt=40&appid=${key}&units=imperial`);
    var apiData = await response.json();
    console.log(apiData);
}
apiCall();



//Loop through retrieved data 
//  for(var i=0; i<apiData.list.length; i+=8){
//      console.log(apiData.list[i].dt_txt + " ---> " + apiData.list[i].main.temp  + " ---> " /*+ JSON.stringify(apiData.list[i].weather)*/);
