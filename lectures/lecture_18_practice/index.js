// console.log('Lecture 18. Practice');


// –––––––-–––––––- Задание 19 –––––––-–––––––-
// let person = {
//   firstName : 'Jim',
//   lastName : 'Peterson',
//   age : 32,
//   sayHello : function () {
//     console.log('hello!');
//   },
// };

// Object.prototype.renderObject = function () {
// const ul = document.createElement('ul');
// // const frag = document.createDocumentFragment(); http://joyreactor.cc/post/2385160
// const div = document.createElement('div');
// for (let key in this) {
//   const value = this[key];
//   if (this.hasOwnProperty(key) && typeof value !== 'function') {
//     const li = document.createElement("li");
//     li.innerHTML = key + " ––– " + this[key];
//     // console.log(key, this[key]);
//     // ul.append(li);
//     // frag.append(li);
//     div.append(li);
//   }
// }
// ul.append(frag);
// ul.innerHTML = div.innerHTML;
// document.body.append(ul);

// const self = this;
//
// Object.keys(this)
//   .filter(function (key) {
//     return typeof self[key] !== 'function';
//   })
//   .forEach(function (key) {
//     console.log(key);
//   })
// }

// person.renderObject();

// const data = {
//   someValue: true
// }
//
// data.renderObject();


// –––––––-–––––––- Задание 20 –––––––-–––––––-
// const obj = {
//
//   data : [1, 2, 4, 2, 1, 4, 5],
//
//   myMap : function (cb) {
//     for (let i = 0; i < this.data.length; i++) {
//       this.data[i] = cb(this.data[i], i, this.data);
//     }
//     return this;
//   },
//   myReduce : function () {
//     for (let i = 0; i < this.data.length; i++) {
//       // console.log(obj.data[i]);
//     }
//     return this;
//   },
//   myFilter : function (cb) {
//     const newData = [];
//     for (let i = 0; i < this.data.length; i++) {
//       const result = cb(this.data[i], i, this.data);
//       if (result) {
//         newData.push(this.data[i]);
//       }
//     }
//     this.data = newData;
//     return this;
//   },
// }
//
// console.log(obj.data);
// obj
//   .myFilter(function (value) {
//     return value > 2;
//   })
//   .myMap(function (value) {
//     return value * 2;
//   })
// console.log(obj.data);

// const obj = {
//   m1: function() {
//     console.log('from –– m1 ––');
//     return this;
//   },
//   m2: function() {
//     console.log('from –– m2 ––');
//     return this;
//   },
//   m3: function() {
//     console.log('from –– m3 ––');
//     return this;
//   }
// }
//
// obj.m2().m1().m3().m2().m2().m1();

// –––––––-–––––––- Задание 21 –––––––-–––––––-

// function ActionLog() {
//   this.actions = [];
// }
//
// ActionLog.prototype.push = function (data) {
//   this.actions.push(data);
//   return this.actions.length;
// }
//
// ActionLog.prototype.getByIndex = function (index) {
//   return this.actions[index];
// }
//
// ActionLog.prototype.clear = function () {
//   this.actions = [];
// }
//
// ActionLog.prototype.getLength = function () {
//   return this.actions.length;
// }
//
// ActionLog.prototype.getLastElement = function () {
//   return this.actions[this.actions.length - 1];
// }
//
// ActionLog.prototype.print = function() {
//   if (this.actions.length === 0) {
//     console.log('History is empty');
//     return;
//   }
//
//   this.actions.forEach(function(logItem) {
//     console.log(logItem);
//   })
// }
//
// // let actionLog = new ActionLog();
// // actionLog.push('move left');
// // actionLog.push('jump');
// // actionLog.push('say hello');
// // actionLog.push('go to sleep');
// // actionLog.clear();
// // actionLog.print();
//
// // –––––––-–––––––- Задание 21 –––––––-–––––––-
// function Calculator() {
//   this.actionLog = new ActionLog();
// }
//
// Calculator.prototype.sum = function(a, b) {
//   const result = a + b
//   const operation = 'sum';
//   const historyItem = { operation, a, b, result };
//   this.actionLog.push(historyItem);
//   return result;
// }
//
// Calculator.prototype.sub = function(a, b) {
//   const result = a - b
//   const operation = 'sub';
//   const historyItem = { operation, a, b, result };
//   this.actionLog.push(historyItem);
//   return a - b;
// }
//
// Calculator.prototype.div = function(a, b) {
//   const result = a / b
//   const operation = 'div';
//   const historyItem = { operation, a, b, result };
//   this.actionLog.push(historyItem);
//   return a / b;
// }
//
// Calculator.prototype.mul = function(a, b) {
//   const result = a * b
//   const operation = 'mul';
//   const historyItem = { operation, a, b, result };
//   this.actionLog.push(historyItem);
//   return a * b;
// }
//
// Calculator.prototype.getLastResult = function() {
//   const lastAction = this.actionLog.getLastElement();
//   if (lastAction) {
//     return lastAction.result;
//   }
// }
//
// Calculator.prototype.clearHistory = function() {
//   this.actionLog.clear();
// }
//
// Calculator.prototype.printHistory = function() {
//   const historyLength = this.actionLog.getLength();
//   if (historyLength === 0) {
//     console.log('History is empty');
//     return;
//   }
//
//   for (let i = 0; i < this.actionLog.getLength(); i++) {
//     const item = this.actionLog.getByIndex(i);
//     console.log("operation: " + item.operation, 'a: ' + item.a, 'b: ' + item.b, 'result: ' + item.result);
//   }
// }
//
// let calc = new Calculator();
// calc.sum(1, 2);
// calc.mul(5, 3);
// calc.div(12, 6);
//
// let lastResult = calc.getLastResult();
// console.log("Last result is:", lastResult) // 2
//
// calc.printHistory();
// // operation: sum, a: 1, b: 2, result: 3,
// // operation: mul, a: 5, b: 3, result: 15
// // operation: div, a: 12, b: 6, result: 2,
//
// calc.clearHistory();
//
// calc.printHistory(); // History is empty
