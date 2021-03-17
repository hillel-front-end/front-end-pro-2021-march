/* ---------------- Task 1 -----------------

   1. Посчитать степень числа a^n.
   2. Посчитать факториал числа n.

    - Модуль Math: pow, floor, round, ceil, trunc, abs, random
   ------------------------------------------
*/

// pow = 3;
// number = 2;
// result = 1;
// for (i = 0; i < pow; i++) {
//   result = result * number;
// }
// console.log(result);

// pow,
// floor, 3.5 Math.floor(3.5) -> // 3
// round, 3.5 Math.round(3.5) -> // 4
// ceil,  3.5 Math.ceil(3.2) -> // 4

// Math.floor(-3.6) -> // -4
// Math.trunc(-3.6) -> // -3
// abs Math.abs(-3) -> // 3
// random Math.random()

// number = 2;
// a = Math.pow(number, 3);
// console.log(a);

// result = 2**5;
// console.log(result);


// randomNumber = Math.random() * 10
// console.log(Math.floor(randomNumber));
//
// randomNumber = Math.random() * 20
// console.log(Math.floor(randomNumber));

// Math.random() * (max - min) - min

// max = 20;
// min = -35;
//
// randomNumber = Math.random() * (max - min) + min;
// console.log(Math.floor(randomNumber));


/* ---------------- Task 2 -----------------
    Создать массив размерностью `n`,
    где `n` вводится с клавиатуры.

    Заполнить случайными числами в
    диапазоне `-20 ... 35`.

    Вывести числа, которые состоят из двух цифр.
   ------------------------------------------
*/

// a = [];
// n = 10;

// a.length = 10;
// console.log(a);

// a = [];
// b = new Array();
//
//
// a = [1,2,3,4];
// // b = new Array(1,2,3,4);

// b = [];
// b.length = n;
// console.log(b);

n = 10;
a = new Array(n);
// a = [5,10,12,3,22,40];
// min = -20;
// max = 35;
//
// for (i = 0; i < a.length; i++) {
//   // `-20 ... 35`.
//   a[i] = Math.random();
//   a[i] = a[i] * (max - min) + min;
//   a[i] = Math.floor(a[i]);
//
//   // console.log('original', a[i]);
//   d1 = Math.trunc(a[i] / 10);
//   d2 = Math.trunc(a[i] / 100);
//   //
//   // if ((a[i] > 9 && a[i] < 100) || (a[i] > -100 && a[i] < -9)) {
//   //
//   // }
//   //
//   if (d1 !== 0 && d2 === 0) {
//     console.log(a[i]);
//   }
//
// }

a = -100.2222;
b = Math.abs(Math.trunc(a)) + '';
console.log(b.length);
if (b.length === 2) {

}

//  1 / 10 = 0.1
//  5 / 10 = 0.5
//  55 / 10 = 5.5
//
//  55 / 100 = 0.55
//  28 / 100 = 0.28
//  128 / 100 = 1.28
//
//
//
//
//



// console.log(min);
// console.log(a);





/*
    ---------------- Task 3 -----------------

    Посчитать в массиве A[n], заполненным случайными числами
    факториалы каждого значения.

   ------------------------------------------
*/
