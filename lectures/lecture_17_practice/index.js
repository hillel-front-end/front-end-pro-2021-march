console.log('Lecture 17. Practice');

// Array Methods

// 1. Map
// const numbers = [1,3,4,5,6,3,1,4];
// console.log(numbers);
// const duplicatedNumbers = []
// for (let i = 0; i < numbers.length; i++) {
//   duplicatedNumbers[i] = numbers[i] * 2
// }
// console.log(duplicatedNumbers);

// const duplicatedNumbers = numbers.map(function(number, index) {
//   if ((index + 1) % 2 === 0) {
//     return number * 2;
//   }
//   return number;
// });
// console.log(duplicatedNumbers);
// console.log(numbers);

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// const users = [
//   { id : 1, firstName : 'ivan', lastName : 'josnson', city: 'Kyiv', birthday: '2020-02-02', children : [] },
//   { id : 2, firstName : 'ivan 1', lastName : 'josnson 1', city: 'New York', birthday: '2020-02-02', children : [] },
//   { id : 3, firstName : 'ivan 2', lastName : 'josnson 2', city: 'Ternopil', birthday: '2020-02-02', children : [] },
//   { id : 4, firstName : 'ivan 3', lastName : 'josnson 3', city: 'Rejkjavik', birthday: '2020-02-02', children : [] },
// ]
// const cities = users.map(function(user) {
//   return user.city;
// })
// console.log(cities)


// 2. Filter
// const numbers = [1,3,4,5,6,3,1,4];
// console.log(numbers);
//
// const numbersWithoutFours = numbers.filter(function(number, i) {
//   console.log('number: ' + number, 'index: ' + i)
//   return number >= 4;
// });
// console.log(numbersWithoutFours);

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// const users = [
//   { id : 1, firstName : 'ivan', lastName : 'josnson', country: 'Ukraine', birthday: '2020-02-02', children : [] },
//   { id : 2, firstName : 'ivan 1', lastName : 'josnson 1', country: 'USA', birthday: '2020-02-02', children : [] },
//   { id : 3, firstName : 'ivan 2', lastName : 'josnson 2', country: 'USA', birthday: '2020-02-02', children : [] },
//   { id : 3, firstName : 'ivan 2', lastName : 'josnson 2', country: 'USA', birthday: '2020-02-02', children : [] },
//   { id : 4, firstName : 'ivan 3', lastName : 'josnson 3', country: 'Ukraine', birthday: '2020-02-02', children : [] },
// ]
// const ukrainians = users.filter(function(user) {
//   return user.country === 'Ukraine';
//   // if (user.country === 'Ukraine') {
//   //   return true;
//   // }
//   // console.log('hello!');
//   // return false;
// })
// console.log(users);
// console.log(ukrainians);

// 3. Map + filter

// const numbers = [1, 3, 4, 5, 6, 3, 1, 4];
// const result = numbers.filter(function (number) {
//   return number > 4;
// }).map(function (number) {
//   return number * 2;
// });
// console.log('%c result', 'background: rgba(255,255,0, .3);', result);

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// const users = [
//   { id : 1, firstName : 'ivan', lastName : 'josnson', country: 'Ukraine', birthday: '2020-02-02', children : [] },
//   { id : 2, firstName : 'ivan 1', lastName : 'josnson 1', country: 'USA', birthday: '2020-02-02', children : [] },
//   { id : 3, firstName : 'ivan 2', lastName : 'josnson 2', country: 'USA', birthday: '2020-02-02', children : [] },
//   { id : 4, firstName : 'ivan 3', lastName : 'josnson 3', country: 'Ukraine', birthday: '2020-02-02', children : [] },
// ]
//
// const names = users.filter(function (user) {
//   return user.country === 'USA';
// }).map(function (user) {
//   return user.firstName;
// })
// console.log(names);

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// const users = [
//   { first_name : 'vasya', last_name : 'peterson', birthCity : 'Kyiv', salary : '2000' },
//   { first_name : 'vasya', last_name : 'peterson', birthCity : 'New York', salary : '3000' },
//   { first_name : 'vasya', last_name : 'peterson', birthCity : 'Hamburg', salary : '1000' },
// ]
// const result = users.map(function (item) {
//   return {
//     firstName: item.first_name,
//     lastName: item.last_name,
//     name : item.first_name + ' ' + item.last_name,
//     birthCity: item.birthCity,
//     salary : parseInt(item.salary),
//   }
// })
// const result2 = result.map(function (user, index, arr) {
  // return Object.assign({ vasya : '111' }, user, { salary : user.salary + 500 }, { petya: '333' })
  // return {
  //   first_name : 'vasya',
  //   last_name : 'peterson',
  //   birthCity : 'Kyiv',
  //   salary : '2000',
  //   salary : '2000' + 500
  // }

  // --- не правильно, так как меняет сам объект user;
  // user.salary = user.salary + 500;
  // return item;
  // ----

  // return Object.assign({}, user, { salary : user.salary + 500 });
  // const obj = {};
  // Object.keys(user).forEach(function(fieldName) {
  //   obj[fieldName] = user[fieldName];
  // });
  // return {
  //   ...user,
  //   salary : user.salary + 500
  // };
// })
//
// console.log(result);
// console.log(result2);

// 3. Reduce
// const numbers = [2,3,5,6,2,4];
// console.log(numbers);
// const sum = numbers.reduce(function(acc, number) {
//   console.log(acc);
//   return number;
// }, 0);
// console.log('sum', sum);

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// const users = [
//   { id : 1, firstName : 'ivan', lastName : 'josnson', city: 'Kyiv', birthday: '2020-02-02', childrenIds : [67,99] },
//   { id : 2, firstName : 'ivan 1', lastName : 'josnson 1', city: 'New_York', birthday: '2020-02-02', childrenIds : [86] },
//   { id : 3, firstName : 'ivan 2', lastName : 'josnson 2', city: 'New_York', birthday: '2020-02-02', childrenIds : [25,6] },
//   { id : 4, firstName : 'ivan 3', lastName : 'josnson 3', city: 'Kyiv', birthday: '2020-02-02', childrenIds : [2,4,98] },
// ]
// const childrenCount = users.reduce(function (acc, user) {
//   return acc + user.childrenIds.length;
// }, 0);
// console.log(childrenCount);

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// const citiesMap = users
//   // .filter(function (user) {/*
//   //   return user.childrenIds.length < 3;
//   // })*/
//   .reduce(function (acc, user) {
//     if (user.childrenIds.length >= 3) {
//       return acc;
//     }
//
//     if (acc[user.city]) {
//       acc[user.city].push(user);
//     } else {
//       acc[user.city] = [user];
//     }
//     return acc;
//   }, {});
// console.log("%c citiesMap", "background: rgba(255,255,0, .3);", citiesMap);
// {
//   Kyiv : [],
//   New_York : [],
// }

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// let pigeons = [
//   { id : 1, type: 'ICE_PIGEON', name: 'Jessica' },
//   { id : 2, type: 'DUTCH', name: 'Homer' },
//   { id : 3, type: 'ORIENTAL', name: 'Kim' },
//   { id : 4, type: 'ICE_PIGEON', name: 'Peter' },
//   { id : 5, type: 'DUTCH', name: 'Rachel' },
// ];
//
//
// const groups = pigeons.reduce(function (acc, pigeon) {
//   console.log(acc);
//   if (acc[pigeon.type]) {
//     acc[pigeon.type].push(pigeon);
//   } else {
//     acc[pigeon.type] = [pigeon];
//   }
//   return acc;
// }, {});
// console.log(groups);


/**
 * В переменной groups должен получиться вот такой объект:
 * groups = {
 *   ICE_PIGEION: [
 *     { id : 1, type: 'ICE_PIGEON', name: 'Jessica' },
 *     { id : 4, type: 'ICE_PIGEON', name: 'Peter' }
 *   ],
 *   DUTCH: [
 *     { id : 2, type: 'DUTCH', name: 'Homer' },
 *     { id : 5, type: 'DUTCH', name: 'Rachel' }
 *   ],
 *   ORIENTAL: [
 *     { id : 3, type: 'ORIENTAL', name: 'Kim' }
 *   ]
 * }
 */

// ********* ******** ******* ********* ******** ******* ********* ******** ******* ********* ******** *******

// const tables = [
//   {
//     name: "table1",
//     width: 100,
//     height: 60,
//     price: 10,
//     colors: ["red", "brown", "green"],
//     inStock: 47
//   },
//   {
//     name: "table2",
//     width: 120,
//     height: 80,
//     price: 30,
//     colors: ["yellow", "red", "cyan","brown"],
//     inStock: 12
//   }
// ];
//
// const stats = {
//   colors: [],
//   prices: [],
//   averagePrice: 0,
//   totalPrice: 0,
//   inStock: 0
// }
//
// const statsResult = tables.reduce(function (acc, table) {
//   acc.colors = acc.colors.concat(table.colors);
//   acc.inStock += table.inStock;
//   acc.prices.push(table.price);
//   acc.totalPrice += table.price;
//   return acc;
// }, stats);
//
// statsResult.averagePrice = statsResult.totalPrice / tables.length;
// console.log(statsResult);
