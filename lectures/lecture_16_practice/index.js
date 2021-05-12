console.log('Lecture 16. Practice');

// Функция без параметров
// function sayHello() {
//   console.log("Hello!");
// }

// Функция с одним параметром
// function sayHello(name) {
//   console.log("Hello, " + name + "!");
// }

// Функция с несколькими параметрами
// function sum(a, b) {
//   return a + b;
// }
//
// num1 = 4;
// num2 = 7;
//
// result = sum(num1, num2);
// result2 = sum(9, 8);
// console.log(result, result2);

// Функция с бесконечным количеством аргументом
// function sum() {
//   sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//     // sum = sum + arguments[i];
//   }
//   return sum;
// }



// Homework 11 - отфильтровать массив

// function excludeNumbers(arrayToFilter, numbersToExclude) {
//   let filtered = [];
//
//   for (let i = 0; i < arrayToFilter.length; i++) {
//     let number = arrayToFilter[i];
//     let hasNumber = numbersToExclude.indexOf(number) !== -1;
//     if (!hasNumber) {
//       filtered.push(number);
//     }
//   }
//
//   return filtered;
// }
//
// var initialArray = [5,6,7,102,42,7,4];
// var filteredArray = excludeNumbers(initialArray, [7,102])
//
// console.log("результат:");
// console.log(initialArray, filteredArray) // [5,6,7,102,42,7,4]  [5,6,42,4];


// Homework 12. Iterator
// Написать функцию createIterator(array), принимающую в себя массив целых чисел
// и возвращает функцию, при многоразовом вызове которой мы получаем каждый
// следующий элемент массива.
//
//   Пример:
// var getNextElement = createIterator([1,2,5,3,1,5]);
// var nextValue = getNextElement(); // 1
// nextValue = getNextElement();
// nextValue = getNextElement();     // 5
// nextValue = getNextElement();     // 3

// function createIterator(elements) {
//
//   let counter = -1;
//
//   function getNextElement() {
//     if (counter < elements.length) {
//       counter++;
//       return elements[counter];
//     }
//   }
//
//   return getNextElement;
// }
//
// var getNextElement = createIterator([1,2,5,3,1,5]);
// var nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// nextValue = getNextElement();
// console.log("%c nextValue", "background: rgba(255,255,0, .3);", nextValue);


// Homework 16. Group By
// let pigeons = [
//   { id : 1, type: 'ICE_PIGEON', name: 'Jessica' },
//   { id : 2, type: 'DUTCH', name: 'Homer' },
//   { id : 3, type: 'ORIENTAL', name: 'Kim' },
//   { id : 4, type: 'ICE_PIGEON', name: 'Peter' },
//   { id : 5, type: 'DUTCH', name: 'Rachel' },
// ];
// let groups = groupBy(pigeons, 'type');
//
// /**
//  * В переменной groups должен получиться вот такой объект:
//  * groups = {
//  *   ICE_PIGEION: [
//  *     { id : 1, type: 'ICE_PIGEON', name: 'Jessica' },
//  *     { id : 4, type: 'ICE_PIGEON', name: 'Peter' }
//  *   ],
//  *   DUTCH: [
//  *     { id : 2, type: 'DUTCH', name: 'Homer' },
//  *     { id : 5, type: 'DUTCH', name: 'Rachel' }
//  *   ],
//  *   ORIENTAL: [
//  *     { id : 3, type: 'ORIENTAL', name: 'Kim' }
//  *   ]
//  * }

// let pigeons = [
//   { id : 1, type: 'ICE_PIGEON', name: 'Jessica' },
//   { id : 2, type: 'DUTCH', name: 'Peter' },
//   { id : 3, type: 'ORIENTAL', name: 'Kim' },
//   { id : 4, type: 'ICE_PIGEON', name: 'Peter' },
//   { id : 5, type: 'DUTCH', name: 'Kim' },
// ];
//
// let groups = groupBy(pigeons, 'type');
// console.log("%c groups", "background: rgba(255,255,0, .3);", groups);
//
//
// function groupBy(data, fieldName) {
//   let grouped = {};
//
//   data.forEach(function(pigeon) {
//     const groupByFieldValue = pigeon[fieldName];
//     // const groupByFieldValue = pigeon['type'];
//     // const groupByFieldValue = pigeon.type;
//
//     if (grouped[groupByFieldValue]) {
//       grouped[groupByFieldValue].push(pigeon);
//     } else {
//       grouped[groupByFieldValue] = [pigeon];
//     }
//   })
//
//   // for (let i = 0; i < data.length; i++) {
//   //   let pigeon = data[i];
//   // }
//
//   return grouped;
// }

// Проверка на отсутствие значения
// function sum(a, b) {
//   if (a === undefined || b === undefined) {
//     return -1;
//   }
//   return a + b;
// }
//
// sum(0, 10);

// Homework 17. Посчитать животных
// let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let petsCount = {};

// Вариант 1
// pets.forEach(function (pet) {
//   debugger;
//   if (!petsCount[pet]) {
//     petsCount[pet] = 0;
//   }
// });
// pets.forEach(function (pet) {
//   petsCount[pet]++;
// });

// Вариант 2
// pets.forEach(function (pet) {
//   if (petsCount[pet]) {
//     petsCount[pet]++;
//   } else {
//     petsCount[pet] = 1;
//   }
// });

var buttonInc = document.querySelector('#inc');
var buttonDec = document.querySelector('#dec');
var valueContainer = document.querySelector('#current-value');
var container = document.querySelector('.container');
var container2 = document.querySelector('.container-2');

buttonInc.addEventListener('click', increment);
buttonDec.addEventListener('click', decrement);

function increment() {
  var nextValue = parseInt(valueContainer.innerHTML) + 10;
  if (nextValue > 100) {
    nextValue = 100;
    alert('Больше 100 нельзя!');
  }
  valueContainer.innerHTML = nextValue;
  container.innerHTML = nextValue;
  container.style.height = nextValue + 'px';

  container2.innerHTML = 100 - nextValue;
  container2.style.height = 100 - nextValue + 'px';
}

function decrement() {
  var nextValue = parseInt(valueContainer.innerHTML) - 10;
  if (nextValue < 0) {
    nextValue = 0;
  }
  valueContainer.innerHTML = nextValue;
  container.innerHTML = nextValue;
  container.style.height = nextValue + 'px';

  container2.innerHTML = 100 - nextValue;
  container2.style.height = 100 - nextValue + 'px';
}

// 1. сделать 2 input и кнопку sum, при нажатию на которую в alert выводится сумма чисел из input
