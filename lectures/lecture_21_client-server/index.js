console.log('Lecture 21. Client – Server');

/*

Lecture 21. Client Server

Структура:

  – Client-Server
    – HTTP
    – Protocol (определение)
    – Request
    – URL Structure
    – Server
    – Response
    – Port
  – Network Tab
  – Жизненный цикл открытия страницы


  – AJAX
  – XHR (sync/async)
  – NPM, NodeJS
  – Static Server
  – TFB
  – Template Engine

 */

const button = document.querySelector('button');
button.addEventListener('click', function() {
  request('http://localhost:8080', onResponse)
})

function onResponse(data) {
  console.log('response data', data);
}

function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function(e) {
    if (xhr.readyState === 4) {
      callback(xhr.responseText)
    }
  });
  xhr.open("GET", url);
  xhr.send();
}

