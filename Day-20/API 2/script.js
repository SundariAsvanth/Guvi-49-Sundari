const apiUrl="https://hp-api.onrender.com/api/characters";



async function fetchData(){
    let result = await fetch(apiUrl);
    let apiResponse = await result.json();
    
    console.log(apiResponse)
    document.getElementById('apiResponse').innerText = JSON.stringify(apiResponse);
    }
    
fetchData();

