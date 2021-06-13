const categoriesList = document.querySelector('#categoriesList');
const newsList = document.querySelector('#newsList');

const createNewsButton = document.querySelector('#createNews');
createNewsButton.addEventListener('click', createNews);

fetchPageData();

function createNews() {
  const data = JSON.stringify({
    title   : 'My News',
    content : 'lorem ipsum dolor sit amet',
  });

  request({
    url    : 'http://localhost:4000/news',
    method : 'POST',
    data   : data,
  }).then(function () {
    alert('The news has been created!');
    request({ url : 'http://localhost:4000/news' }).then(renderNews)
  })
}


function fetchPageData() {
  const newsPromise = request({ url : 'http://localhost:4000/news' });
  const categoriesPromise = request({ url : 'http://localhost:4000/categories' });

  // Promise.race([newsPromise, categoriesPromise])
  //   .then(function(res) {
  //     console.log('result')
  //     renderCategories(res);
  //   })

  Promise.all([newsPromise, categoriesPromise])
    .then(function(res) {
      renderNews(res[0]);
      renderCategories(res[1]);
    })

  // Promise.allSettled([newsPromise, Promise.reject('my error'), categoriesPromise])
  //   .then(function(res) {
  //     console.log('result', res)
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   })
  //
  // Promise.all([newsPromise, Promise.reject('my error'), categoriesPromise])
  //   .then(function(res) {
  //     console.log('result', res)
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   })
}

function renderCategories(categories) {
  categoriesList.innerHTML = '';
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
  newsList.innerHTML = '';
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
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject(xhr.responseText);
        } else {
          console.log(config.url);
          resolve(JSON.parse(xhr.responseText));
        }
      }
    });
    xhr.open(config.method || 'GET', config.url);
    xhr.send(config.data);
  });
}
