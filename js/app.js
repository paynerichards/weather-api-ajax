var zip = prompt("Enter ZIP Code");


$.ajax({
	method: "GET",
	url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=052f26926ae9784c2d677ca7bc5dec98",
	success: function(response){
		var weather = response
		$('#city').text(weather.name);
		$('#condition').text(weather.weather[0].description);
		$('#temp').text(Math.floor(weather.main.temp *  (9 / 5) - 459.67) + "°");
		$('#high').text("High: " + Math.floor(weather.main.temp_max *  (9 / 5) - 459.67) + "°");
		$('#low').text("Low: " + Math.floor(weather.main.temp_min *  (9 / 5) - 459.67) + "°")

	}
})