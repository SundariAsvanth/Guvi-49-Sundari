const apiUrl="http://api.citybik.es/v2/networks";
const apiUrl2="https://hp-api.onrender.com/api/characters";
const apiUrl3="https://meowfacts.herokuapp.com/";


async function fetchData(){
    let result = await fetch(apiUrl);
    let apiResponse = await result.json();
    
    console.log(apiResponse)
    document.getElementById('apiResponse').innerText = JSON.stringify(apiResponse);
    }
    
fetchData();

async function fetchData2(){
    let result = await fetch(apiUrl2);
    let apiResponse2 = await result.json();
    
    console.log(apiResponse2)
    document.getElementById('apiResponse2').innerText = JSON.stringify(apiResponse2);
    }
    
fetchData2();

async function fetchData3(){
    let result = await fetch(apiUrl3);
    let apiResponse3 = await result.json();
    
    console.log(apiResponse3)
    document.getElementById('apiResponse3').innerText = JSON.stringify(apiResponse3);
    }
    
fetchData3();


