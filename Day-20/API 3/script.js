const apiUrl="https://meowfacts.herokuapp.com/";



async function fetchData(){
    let result = await fetch(apiUrl);
    let apiResponse = await result.json();
    
    console.log(apiResponse)
    document.getElementById('apiResponse').innerText = JSON.stringify(apiResponse);
    }
    
fetchData();

