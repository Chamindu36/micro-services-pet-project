const express = require('express');
const bodyParser = require('body-parser');

const aboutRouter = require('./routes/about');
const weatherRouter = require('./routes/weather');

// define port and localhost run the app in local setup
const PORT = 3000;
const HOST_NAME = 'localhost';

const app = express();

// set up client folder as static folder for UI
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));

// set endpoints for the app
app.use("/weather", weatherRouter);
app.use("/about", aboutRouter);

// start the server
app.listen(PORT, HOST_NAME, () => {
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})