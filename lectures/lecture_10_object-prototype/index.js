console.log('Lecture 10');

/*

Lecture 10. Object Prototype

Структура:
  – Что такое прототип
  – В JS у всего есть прототип
  – Литеральная и объектная формы
  – Преобразование примитива в объект и обратно
  – Прототипная цепочка
  – Изменение свойств на прототипе
  – Доступ к методам прототипа

  – Object.create(parent)
  – Object.__proto__
  – Object.assign(target, obj1, obj2, ... ,objN);
  – Object.getPrototypeOf(), Object.setPrototypeFor()
  – Object.getOwnPropertyNames(), Object.keys()

  – this (контекст выполнения)
  – this – это всегда это объект перед точкой (объект, у которого вызван этот метод)
  Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.

 */


// var object1 = {
//   a: true,
// };
// var object2 = {
//   b: false,
// };
//
// Object.prototype
//
// object1.__proto__.hello = 'hello';
// console.log(object1, object2);
//
// var array1 = [1,2,3,5];
// console.log(array1);

// Object.prototype
// object1.__proto__
// object1.__proto__.hello = 'hello';
// Object.prototype.hello2 = 'hello2';

// var godAnimal = {
//   sayImGod() {
//
//   }
// }

// var animal = Object.create(godAnimal);
// animal.move = function() {}
// var animal = {
  // name: "someanimal",
  // move() {
  //   console.log("I'm moving!")
  // }
// }

// var dog = {
//   bark() {
//     console.log("bark bark!")
//   }
// }

// dog = {};
// dog.__proto__ = animal;
// // dog = Object.create(animal);
// dog.name = 'mydog';
// dog.bark = function () {
//   console.log("bark bark!")
// }

// var cat = {
//   meow() {
//     console.log("meow!")
//   }
// }
//
// var cat2 = {
//   meow() {
//     console.log("meow!")
//   }
// }

// var godAnimal = {
//   sayImGod() {}
// }
// var animal = Object.create(godAnimal);
// animal.move = function() {}
//
// // dog = {};
// var dog = Object.create(animal);
// dog.name = 'mydog';
// dog.bark = function () {
//   console.log("bark bark!")
// }
//
// for (let key in dog) {
//   console.log(key, 'is own:', dog.hasOwnProperty(key));
// }

// if (typeof Array.prototype.forEach !== "function") {
//   Array.prototype.forEach = function () {
//
//   }
// }

// var animal = {
//   name: 1,
//   move() {
//
//   }
// };
// var dog = Object.create(animal);
// var d = Object.assign(Object.create(animal),{ y : 20}, { x : 30 });
// var d = Object.assign({},{ y : 20}, { x : 30 });

// getPrototypeOf
// setPrototypeOf

// let freezer = {
//   temp: 2,
//   showTemp() {
//     console.log(freezer.temp);
//   }
// }

// function sum() {
//   console.log(this);
//   return this.a + this.b;
// }

// let sum = function() {
//   console.log(this);
//   return this.a + this.b;
// }
//
// let something1 = {
//   a: 2,
//   b: 5,
//   // sum: sum,
//   sum2() {
//     console.log(this);
//     return this.a + this.b;
//   }
// }
//
// let something2 = {
//   a: 3,
//   b: 5,
//   sum: something1.sum2
// }

// let result1 = something1.sum(something1);
// let result2 = something2.sum(something2);
// console.log(result2);

// let result = something1.sum();
// console.log(result);

// let res = sum();
// console.log(res);

// let res = something2.sum();
// console.log(res);







