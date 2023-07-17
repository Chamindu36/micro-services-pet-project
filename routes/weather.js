const express = require("express");
const https = require('https')

const weatherRouter = express.Router();
weatherRouter.get("/", (req, res) => {
    res.sendFile(__dirname, + "index.html")
})

weatherRouter.post("/", (req, res) => {
    const lat = req.body.latitudeName;
    const lon = req.body.longitudeName;
    const API_KEY = "YOUR_API_KEY";

    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY + ""
    console.log(url);
    https.get(url, (response) => {
        response.on("data", (chunk) => {
            console.log(chunk);
            const responseData = JSON.parse(chunk);
            console.log(responseData);

            const temperature = responseData.current.temp;
            const weatherDes = responseData.weather[0].description;
            const icon = responseData.weather[0].icon;

            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            const timezone = responseData.timezone;

            res.write(`<h1> The weather is ${temperature} degree celsius in ${timezone} and the description is ${weatherDes} </h1>`)
            res.write("<img src=" + imageURL + ">")
            res.send()
        })
    })
})
module.exports = weatherRouter