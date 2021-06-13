const http = require('http');
const utils = require('./utils');


const PORT = 4000;

const news = [
  {
    id      : 1,
    title   : 'Lorem Ipsum',
    content : `Lorem ipsum dolor, consectetur adipisicing elit. Adipisci amet assumenda atque commodi consectetur dolorem dolorum est et exercitationem fugit harum hic ipsa iste labore laborio sam laborum maiores maxime minima molestias nihil nobis non numquam omnis optio placeat quaerat quasi saepe, sapiente similique, tenetur, veritatis voluptatem voluptates voluptatibus! Praesentium, reprehenderit.`,
  },
  {
    id      : 2,
    title   : 'Dolor Sit',
    content : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda atque commodi`,
  },
];

const categories = [
  { id: 1, title: 'Category 1'},
  { id: 3, title: 'Category 3'},
];

const requestListener = function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);

  console.log(`${getDateString()}: [${req.method}] ${req.url}`);

  switch (req.url) {
    case '/news':

      switch (req.method) {
        case 'GET':
          setTimeout(function () {
            res.end(JSON.stringify(news));
          }, 1000);
          break;
        case 'POST':
          utils.readBody(req, function(data) {
            const jsonData = JSON.parse(data);
            const newNews = {
              id: Date.now(),
              title: jsonData.title,
              content: jsonData.content
            }
            news.push(newNews);
            res.end();
          })
      }
      break;
    case '/categories':
      res.end(JSON.stringify(categories));
      break;
    default:
      res.end();
  }
}

const server = http.createServer(requestListener);
server.listen(PORT);
console.log(`${getDateString()}: Server started on port ${PORT}`);

function getDateString() {
  return new Date().toLocaleTimeString();
}
