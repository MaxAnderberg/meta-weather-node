function printWeather(jsonObj, city) {
    console.log(`Today in ${city} it is ${jsonObj.weather_state_name} with a temperature of ${jsonObj.the_temp}C`)
}

module.exports.print = printWeather