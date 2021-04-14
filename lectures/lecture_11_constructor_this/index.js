// "use strict";

console.log('Lecture 11');

/*

Lecture 11. Constructor. This

Структура:
  – Повторение прототипной цепочки и объектов
  – Как создаются встроенные объекты
  – Constructor <––> Prototype
  – Добавление глобальных методов и свойств
     –   [].__proto__ (сервисное свойство)
     –   Array.prototype
     –   добавление 1го или нескольких методов
  – this === context (пример с пультом)
     –   this in global ("use strict")
     –   this как часть объект
     –   this в конструкторе

  – Оператор "new"
    – new Array vs Array
    – new Boolean vs Boolean
    – new Person
    – DOM Example
  – Как работает new
    1. создает пустой объект {} = Object.create(Person.prototype)
    2. вызывает функцию Person с перенаправлением this на объект из пункта №1.

  – вызов Person без new [пример 2]
  – Prototype methods vs Instance methods
  – return внутри constructor

 */


// [].__proto__.someMethod = function () {
//   console.log("I'm a method!");
// }
// Array.prototype.someMethod = function () {
//   console.log("I'm a method!");
// }
//
// function f1() {}
// function f2() {}
// function f3() {}
//
// Object.assign(Array.prototype, {
//   f1: f1,
//   f2: f2,
//   f3: f3
// })

// function MyArray(a, b) {
//   this.a1 = a;
//   this.b1 = b;
// }
//
// let someArray = new Array(1, 2,3)
// // console.dir(MyArray);
//
// // let myData = {
// //   a1: 1,
// //   b1: 2,
// // }
// // console.log(myData);
// let ourArray = new MyArray(1, 2);
// // let nativeArray = new Array(1, 2);
// // console.log(ourArray, nativeArray);
// console.log(ourArray);
//
// // 1. создает пустой объект {} = Object.create(MyArray.prototype)
// // 2. вызывает функцию MyArray с перенаправлением this на объект из пункта №1.


// var data1 = 'hello';
// function makeMyData() {
//   console.log(this);
//   this.data1 = 'welcome';
// }

// 1. this === window
// makeMyData();
// makeMyData === window.makeMyData

// 2. this === myObject
// let myObject = {
//   data1 : 'hello again',
//   makeMyData : makeMyData,
// }

// myObject.makeMyData();
// console.log(myObject);

// let a = makeMyData();
// console.log(a);
// 3. this – ссылка на новый объект типа makeMyData;
// let b = new makeMyData();
// console.log(b);

// function Person(firstName, lastName) {
//   this.firstName = 'Alex';
//   this.lastName = 'Doe';
// }
//
// let person = new Person('firstName', 'lastName');
// console.log(person);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
//
// Person.prototype.whoAmI = function () {
//   console.log(this.firstName + ' ' + this.lastName);
// }
//
// let person = new Person('firstName', 'lastName');
// let person2 = new Person('Alex', 'Doe');
// console.log(person);
// console.log(person2);


// Процедура (порядок) создания нового объекта через функцию-конструктор
// function Person(firstName) {
//   this.firstName = firstName;
// }
// // Person.prototype = {
// //   constructor: Person
// // }
//
// let person = new Person();
// // 1. obj = Object.create(Person.prototype)
// // 2. Person() // this === obj
// // 3. return obj

// function GameCharacter(nickname, health){
//   this.nickname = nickname;
//   this.health = health ? health : 100;
// }
// new GameCharacter("robert")

// sum();
// function sum() {
//   inner();
//   function inner() {
//     console.log(this);
//   }
// }

function ActionLog() {
  this.actions = [];
}

ActionLog.prototype.push = function (data) {
  this.actions.push(data);
  return this.actions.length;
}

ActionLog.prototype.getByIndex = function (index) {
  return this.actions[index];
}

ActionLog.prototype.clear = function () {
  this.actions = [];
}

ActionLog.prototype.getLength = function () {
  return this.actions.length;
}

ActionLog.prototype.print = function() {
  if (this.actions.length === 0) {
    console.log('History is empty');
    return;
  }

  this.actions.forEach(function(logItem) {
    console.log(logItem);
  })
}

let actionLog = new ActionLog();






