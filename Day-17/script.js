const apiUrl = "https://restcountries.com/v3.1/all";
var urlWeather=`https://api.openweathermap.org/data/2.5/weather?lat=-20.0&lon=77.0&appid=dc0fbad7977f3bd8b4eedb86e79fcb36`
var urlWeather2=`https://api.openweathermap.org/data/2.5/weather?lat=-5.0&lon=120.0&appid=dc0fbad7977f3bd8b4eedb86e79fcb36`
var urlWeather3=`https://api.openweathermap.org/data/2.5/weather?lat=32.0&lon=53.0&appid=dc0fbad7977f3bd8b4eedb86e79fcb36`

fetch(apiUrl)
.then((response) => {
    if(response.status===200){
        return response.json();
    }
})
.then((val) => {
    console.log(val);
})
.catch((err) => {
    console.log("Error : ",err);
});


async function get(){
let result = await fetch(urlWeather);
let apiResponse = await result.json();

console.log(apiResponse)
document.getElementById('apiResponse').innerText = JSON.stringify(apiResponse);
}

get();

async function get2(){
    let result = await fetch(urlWeather2);
    let apiResponse2 = await result.json();
    
    console.log(apiResponse2)
    document.getElementById('apiResponse2').innerText = JSON.stringify(apiResponse2);
    }

get2();

async function get3(){
let result = await fetch(urlWeather3);
let apiResponse3 = await result.json();

console.log(apiResponse3)
document.getElementById('apiResponse3').innerText = JSON.stringify(apiResponse3);
}

get3();

