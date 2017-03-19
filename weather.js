'use strict';

const https = require("https");
// Google Maps AIzaSyAWZrNTLzW03gIatwIk-2DpFMnckiYvcLU
// https://maps.googleapis.com/maps/api/geocode/json?address=Odense%20Denmark&key=AIzaSyAWZrNTLzW03gIatwIk-2DpFMnckiYvcLU

// Darksky 558592e8030e3dc0e74aca942f611848
// https://api.darksky.net/forecast/558592e8030e3dc0e74aca942f611848/37.8267,-122.4233 (lat, long)

// Convert request input from array to string
const requestInput = process.argv.slice(2).join(" ");

function getWeather(input) {
    
}


getWeather(requestInput);