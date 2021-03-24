let obj = {
  x : 10,
  y : 20,
  inner : {
    x : 20,
    z : 30,
  },
  z : 60,
  f : 90,
  foo2 : {
    k : 23,
    p : 13,
    u : 56,
  },
};


// News / Sports / Today / Dinamo Wins!

// for (key in obj) {
//   if (typeof obj[key] === 'object') {
//     for (innerKey in obj[key]) {
//       innerKeyName = key + '.' + innerKey;
//       console.log(innerKeyName);
//       obj[innerKeyName] = obj[key][innerKey];
//       // obj[innerKey] = obj.inner.x;
//     }
//     delete obj[key];
//   }
// }

// console.log(obj);

// numbers = ['hello', 'world', 'lorem', 'hello'];
// numbersWithoutDuplicates = {};

// for (i = 0; i < numbers.length; i++) {
//   for (j = numbers.length - 1; j > 0; j--) {
//     if (numbers[i] === numbers[j] && j !== i) {
//       console.log('Duplicate has been found!', numbers[i]);
//       break;
//     }
//   }
// }

// for (i = 0; i < numbers.length; i++) {
//   value = numbers[i];
//   numbersWithoutDuplicates[value] = value;
// }
// console.log(Object.values(numbersWithoutDuplicates));

// user = {
//   firstName: 'Alex'
// }
//
// user.firstName = 'Kim';
// console.log(user);


news1 = {
  id : 'news1',
  title : 'News 1',
  date : '2021-03-23',
}
news2 = {
  id : 'news2',
  title : 'News 2',
  date : '2021-03-22',
}
news3 = {
  id : 'news3',
  title : 'News 3',
  date : '2021-03-21',
}
news4 = {
  id : 'news4',
  title : 'News 4',
  date : '2021-03-20',
}
news5 = {
  id : 'news5',
  title : 'News 5',
  date : '2021-03-20',
}
//
// news = [news1, news2, news3, news4, news5];
// newsByDate = {};
//
// for (i = 0; i < news.length; i++) {
//   currentNews = news[i];
//   if (!newsByDate[currentNews.date]) {
//     newsByDate[currentNews.date] = []
//   }
//
//   newsByDate[currentNews.date].push(currentNews);
// }

// newsData = {
//   'news1' : news1,
//   'news2' : news2,
//   'news3' : news3,
//   'news4' : news4,
//   'news5' : news5,
// }
// news = ['news1', 'news2', 'news3', 'news5', 'news4'];
//
// for (i = 0; i < news.length; i++) {
//   currentNewsId = news[i];
//   currentNewsData = newsData[currentNewsId];
//   console.log(currentNewsData, currentNewsId);
// }

a = 'hello world';
for (key in a) {
  // console.log(key);
  console.log(a[key]);
}
b = a.split('');
console.log(b);


/* Result:

    obj = {
        x: 20,
        y: 20,
        z: 30,
        k: 23,
        p: 13
    }

*/
