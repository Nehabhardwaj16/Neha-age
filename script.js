function getWeather() {
    var city = document.getElementById("city").value;
    var apiKey = "YOUR_API_KEY"; // ⚠️ Yahan apni API key dalna
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var resultDiv = document.getElementById("result");

            var weatherInfo = "<h3>" + data.name + ", " + data.sys.country + "</h3>";
            weatherInfo += "<p>Temperature: " + data.main.temp + "°C</p>";
            weatherInfo += "<p>Humidity: " + data.main.humidity + "%</p>";
            weatherInfo += "<p>Wind Speed: " + data.wind.speed + " m/s</p>";
            weatherInfo += "<p>Weather: " + data.weather[0].description + "</p>";

            resultDiv.innerHTML = weatherInfo;
        } else if (xhr.readyState == 4) {
            document.getElementById("result").innerHTML = "<p style='color:red;'>City not found!</p>";
        }
    };

    xhr.send();
}
