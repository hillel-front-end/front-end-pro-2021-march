const express = require('express')
const bodyParser = require('body-parser')
const APIService = require('./services/APIService');
const app = express()
const port = 8282

app.use(bodyParser.json());

app.post('/user', logRequest, APIService.createUser);
app.get('/user/:id', logRequest, APIService.getUser);
app.get('/user', logRequest, APIService.getAllUsers);
app.put('/user/:id', logRequest, APIService.updateUser);
app.delete('/user/:id', logRequest, APIService.deleteUser);

app.listen(port, () => {
  console.log(`REST API Example listening at http://localhost:${port}`)
})

function logRequest(req, res, next) {
  const date = new Date().toLocaleTimeString();
  console.log(`${date}: [${req.method}] ${req.url}`);
  next();
}
