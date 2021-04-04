console.log('Lecture 8');

/*
  Lecture 8. Functions Practice
*/

/**
 * Task 1;
 * Написать функцию вывода одномерного массива через разделитель в документ.
 */

// a = [1,2,4,5,6];
// document.write(a);

// console.log(1);
// console.log(1 + "");
// console.log(a + "");
// console.log(a.toString());
// console.log(helloWorld + undefined);
//
// function helloWorld() {
//   console.log("Hello World!");
// }
// b = {
//   x : 30,
//   c : 30,
// };
// let bJson = "{ \"x\" : 30, \"c\" : 30 }";
// // console.log(b);
// document.write(JSON.stringify(b));
//
// let bObject = JSON.parse(bJson);
// console.log(bJson);
// console.log(bObject);
// document.write(bObject);


// a = [1,2,4,5,6];

// function printArray(arr, separator) {
//   let arrayString = "";
//
//   for (let i = 0; i < arr.length; i++) {
//     arrayString = arrayString + arr[i];
//     // arrayString = i === arr.length - 1 ? arrayString + arr[i] + separator : arrayString + arr[i];
//
//     if (i !== arr.length - 1) {
//       arrayString += separator;
//     }
//   }
//   // arrayString += arr[arr.length - 1];
//
//   document.write(arrayString);
// }
//
// printArray(a, " *** ");


// ternary operator (тернарный оператор)
// a = 10;
// b = a > 10 ? a < 5 ? 2 : -5 : -2;
//
// if (a > 10) {
//   b = 20;
// } else {
//   b = -5;
// }

// document.write(a.join(" --|-- "))


/**
 * Task 2;
 * Вывести массив в виде списка ul > li
 */
// function printArrayAsList(arr) {
//   let arrayString = "<ul>";
//   for (let i = 0; i < arr.length; i++) {
//     arrayString = arrayString + "<li>" + arr[i] + "</li>";
//   }
//   arrayString += "</ul>";
//   document.write(arrayString);
// }

// function printArrayAsTable(arr) {
//   return "table"
// }
//
// function printArrayAsList(arr) {
//   let listElements = "";
//   for (let i = 0; i < arr.length; i++) {
//     listElements += "<li>" + arr[i] + "</li>";
//   }
//   return "<ul>" + listElements + "</ul>";
// }
//
// function printArray(arr, type) {
//   if (type === 'list') {
//     return printArrayAsList(arr);
//   } else if (type === 'table') {
//     return printArrayAsTable(arr);
//   }
//   return arr.toString();
// }
//
//
// a = ["Завтрак", "Обед", "Ужин"];
// let arrayString = printArray(a, 'list');
// document.write(arrayString);

// a = ["Завтрак", "Обед", "Ужин"];
// let arrayString = "<ul><li>";
// arrayString = arrayString + a.join("</li><li>");
// arrayString = arrayString + "</li></ul>";
// document.write(arrayString)
// console.log(arrayString);


/**
 * Task 3;
 * Вырезать центральный элемент одномерного массива.
 * Если длинна четная – вырезать два элемента
 */

// a = [1,2,3,4,5];
// length === 5; a.length / 2; Math.floor(2.5) –> 2
// length === 5; a.length / 2; Math.floor(2.5) –> 3

// a = [1,2,3,4,5,6];
// length === 6; a.length / 2; Math.ceil(3) –> 3

// a = [1,2,3,4,5];
// length === 5; a.length / 2; Math.ceil(2.5) –> 3

// a = [1,2,3,4,5,6];
// function removeMiddleElement(arr) {
//   let index = Math.ceil(arr.length / 2) - 1;
//
//   let size = 1;
//   if (arr.length % 2 === 0) {
//     size = 2;
//   }
//
//   arr.splice(index, size);
// }
//
// removeMiddleElement(a);
// console.log(a)


/**
 * Task 4;
 * Написать функцию, которая возвращает массив,
 * состоящий из центральных элементов из переданных массивов
 */

// [1,2,3,4,5].slice(2,3)
// [1,2,3,4,5,6].slice(2,4)

//
// function findMiddleElements(arr) {
//   let index = Math.ceil(arr.length / 2) - 1;
//   let size = 1;
//   if (arr.length % 2 === 0) {
//     size = 2;
//   }
//   return arr.slice(index, index + size);
// }

// function concatMiddleElements(a) {
//   let middleElementsArray = [];
//   for (let i = 0; i < arguments.length; i++) {
//     let middleElements = findMiddleElements(arguments[i]);
//     for (let i = 0; i < middleElements.length; i++) {
//       middleElementsArray.push(middleElements[i]);
//     }
//   }
//   return middleElementsArray;
// }

// arr1 = [1,2,3,4,5];
// arr2 = [1,2,3,4,5,6];
// middleElements = concatMiddleElements(arr1, arr2);
// console.log(middleElements);


// function someFunction2(d,e) {
//   console.log(d, e);
// }
//
// function someFunction(a, b, ...c) {
//   console.log(a, b)
//   someFunction2(...c)
// }
//
// someFunction(1, 2, 123, 123123)


// function someFunction2(d, e) {
//   console.log(d, e);
// }
//
// function someFunction(a, b) {
//   console.log(a, b);
//   someFunction2(arguments[2], arguments[3]);
// }
//
// someFunction(1, 2, 123, 123123);

/**
 * Task 5;
 * Написать функцию filter(array, callback)
 * array – массив, который нужно отфильтровать
 * callback – функция-предикат, которая будет определять какие элементы нужно удалить
 */

// a = [1,2,4,6,3,7,4,2];
//
// function filter(arr, callback) {
//   let filtered = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       filtered.push(arr[i]);
//     }
//   }
//   return filtered;
// }
//
// function isEven(item) {
//   return item % 2 === 0;
// }
//
// // console.log(isEven(4));
// console.log(filter(a, isEven));
