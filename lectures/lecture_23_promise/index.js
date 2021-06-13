console.log('Lecture 23. Promise');

/*

Lecture 23. Promise

Структура:

  – "Callback Hell"
  – Promise
  – Promise states (pending, resolved, rejected)
  – Then-chain
  – Error handling (.catch() + try / catch)


  – Sync/Async Code | синхронный/асинхронный код
  – setTimeout/setInterval
  – UI Blocking / DOM Events | блокирование основного потока / события DOM
  – for..lop / execution time (perf. measurement) | время выполнения (измерение производительности)


  – Form Submissions | Отправка данных формы
  – Telegram API Demo | Работа с API (Application Programming Interface) Телеграма

 */


// class MyPromise {
//   constructor(callback) {
//     this.callback = callback;
//   }
//
//   do() {
//     this.callback(f1, f2);
//
//     function f1() {
//       console.log('from f1');
//     }
//
//     function f2() {
//       console.log('f2');
//     }
//   }
// }
//
// const mypromise = new MyPromise(myPromiseCallback);
//
// function myPromiseCallback(f1, f2) {
//   console.log('hello!');
//   f1();
// }
//
// mypromise.do();


// asyncOperation
//   .then(function (data) {
//     console.log('data in then:', data);
//   })
//   .catch(function (err) {
//     console.log('error:', err);
//   })
//
// const asyncOperation = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('my result');
//     }, 2000)
//   }
// );


// function sendRequest(url) {
//   const promise = new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(['news 1', 'news 2', 'news 3']);
//       }, 2000)
//     },
//   );
//   return promise;
// }

// sendRequest('/news')
//   .then(function(result) {
//     renderNews(result);
//   })

// sendRequest('/news')
//   .then(processNews)
//   .then(renderNews)
//   .then(showPagination)
//   .then(sendAnalytics)
//   .catch(showError)
//   .catch(notifyDevelopers)

// sendRequest('/news')
//   .then(processNews)
//   .then(renderNews)
//   .catch(showError)



// sendRequest('/random-number')
//   .then(function (r) {
//     return r + 1;
//   })
//   .then(function (rNew) {
//     return rNew + 2;
//   })
//   .then(function (nNewNew) {
//     return JSON.parse(nNewNew);
//   })
//   .then(
//     function (r) {
//       console.log('result', r);
//     },
//     // function (error) {
//     //   console.log('error happened', error);
//     //   return 1;
//     // },
//   )
//   .then(function (result) {
//     console.log('result after error', result);
//   })
//   .catch(function (error) {
//     console.log('catch happened', error);
//     throw new Error(error);
//   })
//   .catch(function (error) {
//     console.log('catch happened 2', error);
//   })


// sendRequest('/news')
//   .then(function (result) {
//     console.log('then-1', result)
//     throw new Error('some error');
//   })
//   .then(
//     function (result) {
//       console.log('then-2', result);
//       return result;
//     },
//     function (error) {
//       console.log('error-1', error);
//       return 'after error';
//     })
//   .then(function (result) {
//     console.log('then-3', result)
//   })
//   .catch(function (error) {
//     console.log('error-2', error);
//   })
//
//
// function renderNews(news) {
//   news.forEach(function (newsText) {
//     const div = document.createElement('div');
//     div.innerHTML = newsText;
//     document.body.append(div);
//   })
// }


// Try / Catch
// function f1() {
//   console.log('-- f1 --');
//   try {
//     f2();
//   } catch (err) {
//     console.log("my error", err);
//   }
//
//   console.log('after error');
// }
//
// function f2() {
//   console.log('-- f2 --');
//   throw new Error("some error");
//   f3();
// }
//
// function f3() {
//   console.log('-- f3 --');
//   const someValue = "{ test: 1 }";
//   const data = JSON.parse(someValue);
//   console.log(data);
// }
//
// f1();
//
// console.log('after f1')
