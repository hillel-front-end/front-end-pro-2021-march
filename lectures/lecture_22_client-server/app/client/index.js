const categoriesList = document.querySelector('#categoriesList');
const newsList = document.querySelector('#newsList');

const createNewsButton = document.querySelector('#createNews');
createNewsButton.addEventListener('click', createNews);

fetchPageData();

function createNews() {
  const data = JSON.stringify({
    title: 'My News',
    content: "lorem ipsum dolor sit amet"
  });
  request({
    url: 'http://localhost:4000/news',
    method: 'POST',
    data: data,
    onResponse: function () {
      alert("The news has been created!");
      request({
        url: 'http://localhost:4000/news',
        onResponse: function (data) {
          newsList.innerHTML = '';
          const newsData = JSON.parse(data)
          renderNews(newsData);
        }
      })
    }
  })
}


function fetchPageData() {
  request({
    url: 'http://localhost:4000/news',
    onResponse: function (data) {
      newsList.innerHTML = '';
      const newsData = JSON.parse(data)
      renderNews(newsData);
    }
  })

  request({
    url: 'http://localhost:4000/categories',
    onResponse: function (data) {
      categoriesList.innerHTML = '';
      const categoriesData = JSON.parse(data)
      renderCategories(categoriesData);
    }
  })
}

function renderCategories(categories) {
  categories.forEach(function (newsItem) {
    const element = getCategoryElement(newsItem);
    categoriesList.append(element);
  })
}

function getCategoryElement(category) {
  const div = document.createElement('div');
  div.classList.add('categories-item');
  div.innerHTML = `<a href='#'>${category.title}</a>`
  return div;
}


function renderNews(news) {
  news.forEach(function (newsItem) {
    const element = getNewsElement(newsItem);
    newsList.append(element);
  })
}

function getNewsElement(newsData) {
  const div = document.createElement('div');
  div.classList.add('news-item');
  div.innerHTML = `
    <h4 class='news-item__title'>${newsData.title}</h4>
    <p class='news-item__text'>${newsData.content}</p>
  `
  return div;
}

function request(config) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', function (e) {
    if (xhr.readyState === 4) {
      config.onResponse(xhr.responseText)
    }
  });
  xhr.open(config.method || 'GET', config.url);
  xhr.send(config.data);
}

