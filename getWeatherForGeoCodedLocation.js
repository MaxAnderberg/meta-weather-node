const http = require('https');
const printWeather = require('./printWeather');

let rawData = '';
let daData = '';

function getWeatherForGeoCode(id, city) {
    const weatherAPI = 'https://www.metaweather.com/api/location/';

        http.get(weatherAPI + id + '/', (response) => {
            response.on('data', (chunk) => {
                rawData += chunk;
            });
            response.on('end', () => {
                daData = JSON.parse(rawData);
                printWeather.print(daData.consolidated_weather[0], city);
                return daData.consolidated_weather[0];
            })
        });
}

module.exports.getweather = getWeatherForGeoCode;