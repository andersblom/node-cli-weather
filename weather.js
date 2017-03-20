'use strict';

const https = require("https");

// Convert request input from array to string
const requestInput = process.argv.slice(2).join(" ");

function getWeather(input) {
    let data = "";
    
    // Converting input city to lat/long for darksky API
    https.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyAWZrNTLzW03gIatwIk-2DpFMnckiYvcLU`, (response) => {
        response.on("data", (dataChunk) => {
            data += dataChunk;
        });

        // Request done
        response.on("end", () => {
            let parsedData = JSON.parse(data);

            // Variables for next request
            let lat = parsedData.results[0].geometry.location.lat;
            let long = parsedData.results[0].geometry.location.lng;
            
            // Init darksky weather fetch
            https.get(`https://api.darksky.net/forecast/558592e8030e3dc0e74aca942f611848/${lat},${long}`, (response) => {
                let weatherData = "";
                response.on("data", (dataChunk) => {
                    weatherData += dataChunk;
                });
                // Time to display some weather. Yeah buddy!
                response.on("end", () => {
                    let parsedWeather = JSON.parse(weatherData);
                    console.log(`So, you wan't the weather for ${requestInput}, huh?`);
                    console.log("Well, knock yourself out:");
                    console.log("\n");
                    console.log(`It's currently: ${parsedWeather.currently.summary}`);
                    console.log(`And how cold?: ${Math.round(parsedWeather.currently.temperature)} F. / ${Math.round((parsedWeather.currently.temperature - 32) * 5 / 9)} C.`);
                });
            });
        });
    });
}


getWeather(requestInput);