const apiUrl="https://www.themealdb.com/api/json/v1/1/random.php";



async function fetchData(){
    let result = await fetch(apiUrl);
    let apiResponse = await result.json();
    
    console.log(apiResponse)
    document.getElementById('apiResponse').innerText = JSON.stringify(apiResponse);
    }
    
fetchData();

