let cityname = document.getElementById("search");
let button = document.getElementById("btn-search");
console.log(cityname);
let detaildiv  =  document.getElementsByClassName("head")[0];
console.log(detaildiv);
button.addEventListener("click",fetchReport);

async function fetchReport(){
    const city = cityname.value;
    console.log(city);
    const apiKey = "7944fd23a71da29d58edf819333a251d";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const result = await response.json();
    console.log(result);
    const divele = document.createElement("div");

    divele.innerHTML = `
                    <h2>City name :${result.name}</h2>
                    <h2>Temperature:${result.main.temp}<sup>o</sup></h2>
                    <h3>Clouds:${result.weather[0].main}</h3>
                    <h3>Weather:${result.weather[0].description}</h3>
                    `;
    detaildiv.appendChild(divele);
    divele.className ="details";
   

}