const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#weathermood");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    
    let sunrise1 = data.city.sunrise
    let sec = sunrise1;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`
    let deg = Math.round(data.list[0].main.temp -273.15);
    
    console.log(data.list[0].weather[0].main)
    if(data.list[0].weather[0].main == "Clouds"){
        weatherIcon.src = "weather-images/clouds.png";
    }
    else if(data.list[0].weather[0].main == "Rain"){
        weatherIcon.src = "weather-images/rain.png";
    }
    else if(data.list[0].weather[0].main == "Clear"){
        weatherIcon.src = "weather-images/clear.png";
    }
    else if(data.list[0].weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-images/drizzle.png";
    }
    else if(data.list[0].weather[0].main == "Humidity"){
        weatherIcon.src = "weather-images/humidity.png";
    }
    else if(data.list[0].weather[0].main == "Mist"){
        weatherIcon.src = "weather-images/mist.png";
    }
    else if(data.list[0].weather[0].main == "Snow"){
        weatherIcon.src = "weather-images/snow.png";
    }
    else if(data.list[0].weather[0].main == "Wind"){
        weatherIcon.src = "weather-images/wind.png";
    }

    

    document.getElementById("degree").innerHTML = deg + '˚C';
    document.getElementById("place").innerHTML = data.city.name + ", " + data.city.country;
    document.getElementById("time").innerHTML = new Date().toLocaleString();
    document.getElementById("sunset").innerHTML = timestr + " AM" + "<br> Sunrise";
    document.getElementById("humidity").innerHTML = data.list[0].main.humidity + "<br> Humidity";
    document.getElementById("pressure").innerHTML = data.list[0].main.pressure + "<br> Pressure";
    document.getElementById("speed").innerHTML = data.list[0].wind.speed + "<br> Km/hr";

    document.getElementById("weather-sun").innerHTML = data.list[0].weather[0].description;
    document.getElementById("weather-mon").innerHTML = data.list[1].weather[0].description;
    document.getElementById("weather-tue").innerHTML = data.list[2].weather[0].description;
    document.getElementById("weather-wed").innerHTML = data.list[3].weather[0].description;
    document.getElementById("weather-thu").innerHTML = data.list[4].weather[0].description;
    document.getElementById("weather-fri").innerHTML = data.list[5].weather[0].description;
    document.getElementById("weather-sat").innerHTML = data.list[6].weather[0].description;

    document.getElementById("temp-sun").innerHTML = Math.round(data.list[0].main.temp -273.15) + '˚C';
    document.getElementById("temp-mon").innerHTML = Math.round(data.list[1].main.temp -273.15) + '˚C';
    document.getElementById("temp-tue").innerHTML = Math.round(data.list[2].main.temp -273.15) + '˚C';
    document.getElementById("temp-wed").innerHTML = Math.round(data.list[3].main.temp -273.15) + '˚C';
    document.getElementById("temp-thu").innerHTML = Math.round(data.list[4].main.temp -273.15) + '˚C';
    document.getElementById("temp-fri").innerHTML = Math.round(data.list[5].main.temp -273.15) + '˚C';
    document.getElementById("temp-sat").innerHTML = Math.round(data.list[6].main.temp -273.15) + '˚C';

    document.getElementById("humi-sun").innerHTML = data.list[0].main.humidity;
    document.getElementById("humi-mon").innerHTML = data.list[1].main.humidity;
    document.getElementById("humi-tue").innerHTML = data.list[2].main.humidity;
    document.getElementById("humi-wed").innerHTML = data.list[3].main.humidity;
    document.getElementById("humi-thu").innerHTML = data.list[4].main.humidity;
    document.getElementById("humi-fri").innerHTML = data.list[5].main.humidity;
    document.getElementById("humi-sat").innerHTML = data.list[6].main.humidity;

    document.getElementById("pres-sun").innerHTML = data.list[0].main.pressure;
    document.getElementById("pres-mon").innerHTML = data.list[1].main.pressure;
    document.getElementById("pres-tue").innerHTML = data.list[2].main.pressure;
    document.getElementById("pres-wed").innerHTML = data.list[3].main.pressure;
    document.getElementById("pres-thu").innerHTML = data.list[4].main.pressure;
    document.getElementById("pres-fri").innerHTML = data.list[5].main.pressure;
    document.getElementById("pres-sat").innerHTML = data.list[6].main.pressure;

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
