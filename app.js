const getCode = require('./geoCodeLocation');
const getWeather = require('./getWeatherForGeoCodedLocation');

let city = process.argv.slice(2).toString();

 getCode.geocode(city)
     .then((data) => {
         getWeather.getweather(data[0].woeid, city)
     })
     .catch(err => console.log(err) );