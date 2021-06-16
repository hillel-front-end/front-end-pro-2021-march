const express = require('express')
const app = express()

const news = [
  { slug: 'no-turning-back-on-free-market-reforms', title: 'Title Free', content: 'free market' },
  { slug: 'ukraine-house-davos-2019-summary', title: 'Title Davos', content: 'davos 2019 summary' }
]

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/news', function (req, res) {
  res.send("<h1>News Page</h1>")
})

app.get('/news/:slug', function (req, res) {
  const newsItem = news.find(function (newsItem) {
    return newsItem.slug === req.params.slug;
  })

  if (newsItem) {
    res.send(`<h1>${newsItem.title}</h1><p>${newsItem.content}</p>`)
  } else {
    res.send(`<h1>Новость не найдена</h1>`)
  }
})

app.listen(8080)
