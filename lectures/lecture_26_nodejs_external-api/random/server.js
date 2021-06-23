const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const app = express()
const port = 4000

const WEATHER_API_KEY = 'f261ed975531e562f501f7465196376d'

app.use(bodyParser.json());

app.get('/random/number', logRequest, handleRandomNumber);
app.get('/random/array', logRequest, handleRandomArray);
app.get('/weather/current', logRequest, handleCurrentWeather);

app.listen(port, () => {
  console.log(`Random listening at http://localhost:${port}`)
})

function handleRandomNumber(req, res) {
  const randomNumber = Math.floor(Math.random() * 10000) + '';
  res.send(randomNumber);
}

function handleRandomArray(req, res) {
  const arraySize = Math.floor(Math.random() * 30)
  const arr = new Array(arraySize).fill(0).map(function () {
    return Math.floor(Math.random() * 10000);
  })
  res.send(arr + '');
}

function handleCurrentWeather(req, res) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${WEATHER_API_KEY}&units=metric`)
    .then(function(r) {
      return r.json()
    })
    .then(function (weather) {
      res.send(weather);
    })
}

function logRequest(req, res, next) {
  const date = new Date().toLocaleTimeString();
  console.log(`${date}: [RANDOM] [${req.method}] ${req.url}`);
  next();
}
