console.log('Lecture 29. Bind Call Apply')

/*

Структура:

1. Performance Tab
   – Color changing / performance tab
   – Google Performance Demo https://googlechrome.github.io/devtools-samples/jank/ (+ blurred window)
   – setInterval and blurred window

2. Lighthouse

3. bind() call() apply() + Arrow Functions
   – Math.max
   – partial applying
   – наследование и arrow functions

4. ES6 and beyond
   – https://tc39.es/process-document/
   – https://babeljs.io/docs/en/plugins-list

   – обсудить: https://babeljs.io/docs/en/babel-plugin-transform-reserved-words

 */

// function getRandom() {
//   return Math.floor(Math.random() * 255)
// }
//
// window.addEventListener('scroll', function(e) {
//   for (let i = 0; i < 1000000000; i++) {}
//   document.body.style.color = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
// })

// Bind Example:

// const person = {
//   firstName : 'Vasya',
//   lastName : 'Pupkin',
//   sayMyName : function(prefix, prefix2) {
//     console.log(arguments);
//     console.log(this);
//     console.log(prefix, prefix2, this.firstName + ' ' + this.lastName);
//   }
// }

// person.sayMyName();

// .bind()
// const title = document.querySelector('h1');
// title.addEventListener('click', person.sayMyName.bind(person, 'Mr.'));
// title.addEventListener('click', function(e) {
//   person.sayMyName('Mr.', e)
// });

// const fn1 = person.sayMyName.bind(person);
// const fn2 = person.sayMyName
//
// console.log(fn1 === fn2)

// const person = {
//   firstName : 'Vasya',
//   lastName : 'Pupkin',
//   age : 22,
//   sex : 'male',
//   sayMyName : function(prefix) {
//     const name = this.firstName + ' ' + this.lastName;
//     console.group(prefix + ' ' + name)
//     console.log('Age is:', this.age);
//     console.log('Sex is:', this.sex);
//     console.groupEnd()
//   }
// }
// person.sayMyName('Mr. ');
//
//
// const janifer = {
//   firstName : 'Janifer',
//   lastName : 'Doe',
//   age : 22,
//   sex : 'female',
// }

// Call
// person.sayMyName.call(janifer, 'Ms.')

// Apply
// person.sayMyName.apply(janifer, ['Ms.'])


// const numbers = [1,2,3,5,2,192,2]
// const maxNumber = Math.max.apply(null, numbers);
// console.log(maxNumber);


// function sum(a, b) {
//   return a + b;
// }

// var sum = function(a, b) {
//   return a + b;
// }
//
// const sum = (a, b) => {
//   return a + b
// };


// 1 параметр (не обязательные скобки)
// function isPositive(num) {
//   return num > 0;
// }
// / 1 параметр (не обязательные скобки)
// const isPositive = num => num > 0;

// без параметров
// function getRandom() {
//   return Math.random()
// }
//
// const getRandom = () => Math.random();
// document.addEventListener('click', function() {
//   console.log('click');
// })
//
// document.addEventListener('click', () => console.log('click'));
// var res = [1,2,3,4,5].map(function(x) {
//   return x * 2;
// }).filter(function(x) {
//   return x > 2;
// });
//
// var res = [1,2,3,4,5]
//   .map(x => x * 2)
//   .filter(x => x > 2);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//   sayMyName() {
//     setTimeout(function (e) {
//       console.log(this);
//       console.log('Name is: ', this.name, e);
//     }, 1000)
//   }
//
//   sayMyNameArrTimeout() {
//     setTimeout((e) => {
//       console.log('Name is: ', this.name, e);
//     }, 1000)
//   }
//
//   sayMyNameArr = (e) => {
//     console.log('Name is: ', this.name, this.game, e);
//   }
// }

// const p = new Person('Evgeniy');
// p.sayMyName();
// p.sayMyNameArr();
// const title = document.querySelector('h1');
// title.addEventListener('click', p.sayMyNameArr)

// class GameChar extends Person {
//   constructor(name) {
//     super(name);
//     this.game = 'my game'
//   }
// }
//
// var g = new GameChar('vasya');
// g.sayMyNameArr();
//


