// console.log('Lecture 6');

/*
Lecture 6. Functions

Структура:
    - Что такое функция (подпрограмма, которая выполняет определенный код, имеет своё имя, по которому можно её вызвать)
    – Зачем нужны функции
    – Создание и использование в JS
    – Последовательность работы интерпретатора
       –   Пример: ошибка внутри функции
       –   Обращайте внимание на номер строки
       –   Функции можно вызывать до объявления
    – Function Declaration (предварительный анализ)
    – Function Expression
    – Передача значений в функцию
       -   Аргументы и параметры
       –   Сопоставление аргументов и параметров
       –   2 + 5 + undefined
       –   Приоритет всегда имеет строка, следующим идет число
    – Возврат значения и его использование
    – Пример: подсчет суммы массива

    – Области видимости
       -   Разрешение переменных
       –   Задача области видимости – разграничить переменные + оптимизация памяти
       –   Вложенная область видимости нужна для того, чтобы решать ту задачу, для которой эта область видимости была создана
       –   Каждая функция создает свою область видимости
       –   var – локальная переменная
       –   is not defined
       -   Global Scope (window (for browser), такой же объект как и все остальные)
       –   Пример: перезапись переменной из глобальной области видимости

*/

// hello();
// hello();

// function hello() {
//   console.log('hello world!');
// }

// sayHello = function() {
//   console.log('hello world!');
// }

// function sum() {
//   res = a + b;
//   console.log(res);
// }
//
// a = 10;
// b = 20;
// sum();
//
// a = 20;
// b = -40;
// sum();
//
//
// function sum(firstNumber, secondNumber) {
//   res = firstNumber + secondNumber;
//   console.log(res);
// }


// a = 10;
// b = 20;
// sum(a, b);
//


// function askUserForNumber() {
//   // your code
//   checkSize();
// }
//
// function checkSize(size) {
//   // your code
// }
//
// function printRectangle(width, height) {
//   // your code
// }
//
// width = askUserForNumber();
// height = askUserForNumber();
// printRectangle(width, height);

// function sum(firstNumber, secondNumber) {
//   res = firstNumber + secondNumber;
//   console.log(res);
// }

//  sum(a, b)
//  sum(firstNumber, secondNumber)


// function sum(firstNumber, secondNumber) {
//   // res = firstNumber + secondNumber;
//   // console.log(firstNumber, secondNumber);
//   res = firstNumber + secondNumber;
//   return res;
// }

// a = 10;
// b = 23;
// c = sum(a);
// console.log(c);


// 1 + undefined;
// '1' + undefined;
// true + undefined;
// [1,2,3] + undefined;
// { x : 30 } + undefined
//
// function sum(firstNumber, secondNumber) {
//   // res = firstNumber + secondNumber;
//   // console.log(firstNumber, secondNumber);
//   res = firstNumber + secondNumber;
//   return res;
// }

// a = 10;
// b = 20;
// sum();
// console.log(c);
// console.log(a);
//
// function sum() {
//   res = a + b;
//   c = -2;
//   a = 20;
//   console.log(res);
// }

// function sum() {
//   // your code here
// }

// function sumArray(numbers) {
//   sum = 0;
//   for (a = 0; a < numbers.length; a++) {
//     sum += numbers[a];
//   }
//   return sum;
// }

// n = 6;
// a = [3,4,6,2,3,7];
// sum = sumArray(a);
// console.log(sum);
// console.log(n);

// a = [
//   [3,4,6,2,3,7],
//   [3,4,6,2,3,2],
//   [3,4,6,2,3,3],
// ];
//
// total = 0;
// for (i = 0; i < a.length; i++) {
//   currentSum = sumArray(a[i]);
//   console.log(a);
//   total += currentSum;
// }
// console.log(total);



// x = 10;
// y = 20;
// sum();
//
// function sum() {
//   res = x + y;
// }

// z = 10;
// c = 20;
// b = 30;
// function f1() {
//   console.log('inside f1', z);
// }
//
// function f2() {
//   console.log('inside f2', z);
//   function f21() {
//     console.log('inside f2.1', c);
//   }
//   f21();
// }

// f1();
// f2();

// alert();
// window.alert();
// console.log(window);
// delete window.b;
// console.log(window);
// console.log(b);

// var a = 5;
// console.log(window);
//
// function test() {
//   var a = 10;
//   console.log(a, b);
// }
//
// test();
// console.log(a);

// var a = [1,2,3,5];
// function sumArray(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// result = sumArray(a);
// console.log(result);
// console.log(window);
// console.log(sum);
// console.log(i);


// a = 1;
// // b = 2;
//
// function f1() {
//   var b = 2;
//   f12();
//   console.log(a);    // 1
//   function f12() {
//     var b = 3;
//     console.log(b);  // 3
//   }
//   console.log(b);    // 2
// }
//
// function f2() {
//   a = 20;
// }
//
// f2();
// f1()

function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function printArray(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}


