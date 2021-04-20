const http = require('https');
let returnedData;
let woeid;

function geoCodeLocation(location) {
    const locationAPI = 'https://www.metaweather.com/api/location/search/?query='
    return new Promise((resolve, reject) => {
        http.get(locationAPI + location, (response) => {
            response.on('data', (chunk) => {
                returnedData = chunk;
            });

            response.on('end', () => {
                woeid = JSON.parse(returnedData)
                resolve(woeid)
            })
        });
    })
}

module.exports.geocode = geoCodeLocation;