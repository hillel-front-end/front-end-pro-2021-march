const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const app = express()
const port = 5000

app.use(bodyParser.json());

app.get('/backend/number', logRequest, function (req, res) {
  fetch('http://localhost:4000/random/number')
    .then(function(r) {
      return r.text()
    })
    .then(function (randomNumber) {
      res.send(randomNumber);
    })
});

app.get('/backend/weather/current', logRequest, function (req, res) {
  fetch('http://localhost:4000/weather/current')
    .then(function(r) {
      return r.json()
    })
    .then(function (weather) {
      weather.backend = true;
      res.send(weather);
    })
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})

function logRequest(req, res, next) {
  const date = new Date().toLocaleTimeString();
  console.log(`${date}: [Backend] [${req.method}] ${req.url}`);
  next();
}
