var mykey = config.MY_API_TOKEN;
var secretkey = config.SECRET_API_KEY;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': secretkey,
		'X-RapidAPI-Host': mykey,
	}
};
function printInput() {
    const input = document.getElementById("inputField").value;
    const output = document.getElementById("output");
    output.innerHTML = input;
}
  
const getWeather = (inputField) => {
	// const name = document.getElementById("place");
	// name.innerHTML = city

	// document.addEventListener("DOMContentLoaded", function() {
	// 	const name = document.getElementById("place");
	// 	name.innerHTML = city;	
	//   });
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ inputField, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));

}
// const final = document.getElementById("submitMessage");
// final.addEventListener("submit", (e)=>{
// 	e.preventDefault()
// 	getWeather(city.value)
// });

document.addEventListener("DOMContentLoaded", function() {
	const element = document.getElementById("submitMessage");
	element.addEventListener("click",(e)=> {
		e.preventDefault()
		getWeather(inputField.value)
	});
  });
  

// getWeather("Delhi")