/*an application to search a city and then get it's resulting weather*/

function myFunction() {
  var city = document.getElementById("cityCode").value;

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&APPID=c1529d3a73ef95a02dd287d96a67f644",
    function (data) {
      var icon =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      var temp = Math.floor(data.main.temp);
      var weather = data.weather[0].main;
      var high = Math.floor(data.main.temp_max);
      var low = Math.floor(data.main.temp_min);
      var windSpeed = data.wind.speed;
      var windDeg = data.wind.deg;

      $(".icon").attr("src", icon);
      $(".temp").html(temp + " °C"); //append because your adding into this tag, image was a src itself, thats the difference
      //.html() instead to replace the data
      $(".weather").html(weather);
      $(".high").html("High: " + high + " °C");
      $(".low").html("Low: " + low + " °C");
      $(".speed").html("Wind speed: " + windSpeed + " KM/hr");
      $(".deg").html("Wind degree: " + windDeg + "°");
    }
  );
}

export { myFunction };
