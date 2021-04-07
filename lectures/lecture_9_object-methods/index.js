console.log('Lecture 8');

/*
  Lecture 9. Object Methods

  – Imperative (how) vs Declarative (what)

  – forEach  ----|
                 | forEach & map всегда делают столько итераций, сколько элементов в массиве (пропуская "дырки")
  – map      ----|--|
                    | map & filter всегда возвращают новый массив
  – filter   ––––---|
  – find     ––-- some data
  – some     ––-- boolean
  – every    –––– boolean

  – reduce   ---- возвращает новые данные любого типа (не только массив), полученные на основе массива
    –   convert array to map
    –   numbers sum
    –   grouping

Important
  – в array methods нет break
  – они НЕ деструктивны по своей природе
  – map и filter могут быть вызваны друг за другом
*/


// let a = [1, 2, 3, 4, 5];
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// a.forEach(function(value, index, source) {
//   console.log(
//     'value:', value,
//     'index:', index,
//     'source:', source
//   );
// });

/**
 *
 * let i = 0;
 * let a = [1, 2, 3, 4, 5];
 *
 * LOOP_START:
 * if (i < a.length) {
 *   console.log(a[i]);
 *   i++
 *   goto LOOP_START;
 * }
 *
 *
 */

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }
//
// forEach(a, function(value, index, source) {
//   console.log(
//     'value:', value,
//     'index:', index,
//     'source:', source
//   );
// })


// let a = [1, 2, 3, 4, 5];

// let result = a.forEach(function(value, index, source) {
//   // console.log(a.pop());
//   console.log(
//     'value:', value,
//     'index:', index,
//     'source:', source
//   );
// });

// console.log(a);

// let a = [1, 2, 3, 4, 5];
// 0       [2];
// 1       [2, 4];
// 2       [2, 4, 6];

// let result = a.map(function(value, index, source) {
//   return value * 2;
//   // return 10;
// });
//
// console.log(result);

// let a = [1, 2, 3, 4, 5, -2, 10, 5, 3];
// let result = a.filter(function(value) {
//   return value < 5;
// })
//
// console.log(result);

// every
// some

// let a = [1, 2, 3, 4, 5,'hello', -2, 10, 5, 3, ];
// let result = a.every(function(value) {
//   console.log(value);
//   return typeof value === 'number';
// })
// console.log(result);

// let a = [1, 2, 3, 4, 5,'hello', -2, 10, 5, 3, ];
// let result = a.some(function(value) {
//   console.log(value);
//   return typeof value !== 'number';
// })

// console.log(result);

// let a = [
//   {
//     id : 1,
//     name : 'peter',
//     mark : 10,
//   },
//   {
//     id : 2,
//     name : 'john',
//     mark : 4,
//   },
//   {
//     id : 3,
//     name : 'john',
//     mark : 10,
//   },
// ];

// a.length = 1000;
// console.log(a);
//
// let result = a.find(function(user) {
//   return user.mark === 10;
// })
// console.log(result);

// let a = [1, 2, 3, 4, 5, -2, 10, 5, 3];
//
// /**
//  * < 0 – если больше
//  * 0 – если равны
//  * > 0 – если меньше
//  */
// a.sort(function(a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })
// console.log(a);

// let a = [1, 2, 3, 4, 5, -2, 10, 5, 3];

// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }
//
// a.forEach(function(value) {
//   sum = sum + value;
// })

// let result = a.reduce(function(acc, value) {
//   debugger;
//   return acc + value;
// });

// console.log(result);
