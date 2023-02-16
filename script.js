const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fd0ca20c5mshf25aefc9c71e626p1cfa48jsn5f602aec75ef',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			// console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed

		})
		.catch(err => console.error(err));
}

btn1.addEventListener('click', (e) => {
	e.preventDefault();
	getWeather(city.value);

});

getWeather("Delhi");


function getWeatherData(cities, shanghai) {


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)


			shanghai[1].innerHTML = response.cloud_pct
			shanghai[2].innerHTML = response.feels_like
			shanghai[3].innerHTML = response.humidity
			shanghai[4].innerHTML = response.max_temp
			shanghai[5].innerHTML = response.min_temp
			shanghai[6].innerHTML = response.sunrise
			shanghai[7].innerHTML = response.sunset
			shanghai[8].innerHTML = response.temp

			shanghai[9].innerHTML = response.wind_degrees
			shanghai[10].innerHTML = response.wind_speed




		})
		.catch(err => console.error(err));
}
let shanghai = document.getElementsByTagName("tr")[1].cells
let boston = document.getElementsByTagName("tr")[2].cells
let Lucknow = document.getElementsByTagName("tr")[3].cells
let Kolkata = document.getElementsByTagName("tr")[4].cells
let Mussoorie = document.getElementsByTagName("tr")[5].cells
let Hyderabad = document.getElementsByTagName("tr")[6].cells

getWeatherData("shanghai", shanghai)
getWeatherData("boston", boston)
getWeatherData("Lucknow", Lucknow)
getWeatherData("Kolkata", Kolkata)
getWeatherData("Mussoorie", Mussoorie)
getWeatherData("Hyderabad", Hyderabad)


let dropDown0 = document.getElementsByClassName("dropdown-item")[0]
let dropDown1 = document.getElementsByClassName("dropdown-item")[1]
let dropDown2= document.getElementsByClassName("dropdown-item")[2]
let dropDown3= document.getElementsByClassName("dropdown-item")[3]
dropDown0.addEventListener('click',(e)=>{
	e.preventDefault();
	city.value = dropDown0.innerHTML 
	getWeather(city.value);
})
dropDown1.addEventListener('click',(e)=>{
	e.preventDefault();
	city.value = dropDown1.innerHTML 
	getWeather(city.value);
})
dropDown2.addEventListener('click',(e)=>{
	e.preventDefault();
	city.value = dropDown2.innerHTML 
	getWeather(city.value);
})
dropDown3.addEventListener('click',(e)=>{
	e.preventDefault();
	city.value = dropDown3.innerHTML 
	getWeather(city.value);
})

