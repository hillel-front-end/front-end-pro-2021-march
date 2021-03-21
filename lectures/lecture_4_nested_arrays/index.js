console.log('Lecture 4');


/*

Lecture 4. Nested Arrays; String as array

Структура:
    - document.write
    – Разница между одно/двумерными массивами
    - JS vs C
    – Создание и заполнение двумерного массива
       -   следить за индексами
       -   обращаться по индексу
       –   вложенные массивы могут быть разной длинны

    – Работа с матрицей (умение искать закономерности)
       -   главная диагональ
       -   побочная диагональ
       -   нижняя зона
       -   верхняя зона
       -   заполнение столбца
       -   заполнение ряда
       -   пересечение с главной диагональю
       –   AND, OR, XOR

    - Практика

    - Строки как массивы
       -  по индексу только доступ, менять нельзя
       -  split
       -  substr
       -  substring(start, end) между start и end
       -  join(start, length) length символов, начиная от start
       –  slice
       -  indexOf
       –  includes
       -  startsWith
       -  endsWith
       -  Сравнение строк (коды, localeCompare)

Практика:
    В двумерном массиве M * N найти:
        - ряд с наименьшей суммой чисел (вывести сумму и номер ряда)
        - ряд с наибольшей суммой чисел (вывести сумму и номер ряда)
        - поменять местами найденные ряды в существующем массиве

*/

// n = 10;
// arr = new Array(n);

// b = [
//    [1,2,3,4,5], // 0
// //  0 1 2 3 4
//    [6,4,1,2],   // 1
// //  0 1 2 3
//    [6,4,0,0,0], // 2
// //  0 1 2 3 4
// ];
// console.log(b[1][1]);


   // [1,2,3,4,5]
    // 0 1 2 3 5

// for (i = 0; i < arr.length; i++) {
//   // arr[i] = Math.floor(Math.random() * 10);
//   arr[i] = new Array(n);
//   for (j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Math.floor(Math.random() * 10);
//   }
// }
//
// console.log(arr);

// for (i = 0; i < arr.length; i++) {
//   // arr[i] = new Array(n);
//   innerArray = new Array(n);
//   arr[i] = innerArray;
//   for (j = 0; j < innerArray.length; j++) {
//     innerArray[j] = Math.floor(Math.random() * 10);
//   }
// }
//
// console.log(arr);

// n = 10;
// arr = new Array(n);
//
// for (i = 0; i < arr.length; i++) {
//   arr[i] = new Array(n);
//   for (j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Math.floor(Math.random() * 10);
    // document.write("&nbsp;" + arr[i][j] + "&nbsp;");

    // главная диагональ
    // if (i === j) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    // побочная диагональ
    // if (i + j === n - 1) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    // выше от главной диагонали
    // if (i < j) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    // ниже от главной диагонали
    // if (i > j) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    // // выше от побочной диагонали
    // if (i + j < n - 1) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    // ниже от побочной диагонали
    // if (i + j > n - 1) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    // [*    ]
    // [* *  ]
    // [*    ]
    // if (i + j < n - 1 && i > j) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    // [    *]
    // [  * *]
    // [    *]
    // if (i + j > n - 1 && i < j) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }

    //[ * * * ]
    //[   *   ]
    //[ * * * ]
    // if (i + j !== n - 1 && i !== j) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }


    // [*   *]
    // [* * *]
    // [*   *]
    // if (i + j < n - 1 ^ i > j) {
    //   document.write("&nbsp;" + '***' + "&nbsp;");
    //   continue;
    // }
    // document.write("&nbsp;" + i + ',' + j + "&nbsp;");
  // }
  // document.write("<br/>");
// }

// console.log(arr);

// n = 7;
// arr = new Array(7);

// for (i = 0; i < arr.length; i++) {
//   // arr[i] = Math.floor(Math.random() * 10);
//   arr[i] = new Array(n);
//   for (j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Math.floor(Math.random() * 10);
//   }
// }

// console.log("%c arr", "background: rgba(255,255,0, .3);", arr);
// console.log(arr);

// minSum = 0;
// minRowIndex;

// for (i = 0; i < arr.length; i++) {
//   sum = 0;
//   for (j = 0; j < arr.length; j++) {
//     sum += arr[i][j];
//   }
//
//   // console.log(i, sum);
//
//   if (i === 0) {
//     minSum = sum;
//     minRowIndex = i;
//
//     maxSum = sum;
//     maxRowIndex = i;
//     continue;
//   }
//
//   if (sum < minSum) {
//     minSum = sum;
//     minRowIndex = i;
//     continue;
//   }
//
//   if (sum > maxSum) {
//     maxSum = sum;
//     maxRowIndex = i;
//   }
//
// }

// console.log(minRowIndex, 'min sum is: ' + minSum);
// console.log(maxRowIndex, 'max sum is: ' + maxSum);






//
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {
//     document.write("&nbsp;" + arr[i][j] + "&nbsp;");
//   }
//   document.write("<br/>");
// }


// arr2 = arr.slice();
//
// console.log(arr);
//
// temp = arr2[maxRowIndex];
// arr2[maxRowIndex] = arr2[minRowIndex];
// arr2[minRowIndex] = temp;
//
// console.log(arr2);

// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {
//     document.write("&nbsp;" + arr[i][j] + "&nbsp;");
//   }
//   document.write("<br/>");
// }


// -  по индексу только доступ, менять нельзя
// -  split
// -  substr(start, length) length символов, начиная от start
// -  substring(start, end) между start и end
// -  join
// –  slice
// -  indexOf
// –  includes
// -  startsWith
// -  endsWith
// -  replace
// -  Сравнение строк (коды, localeCompare)



// a = 'lorem ipsum dolor sit amet';
// console.log(a.length);
// console.log(a[4]);

// console.log(a.slice(5, 10));
// console.log(a.split(''));

// console.log(a);
// arrA = a.split('');
// console.log(arrA);
// arrA[4] = 'ddddd';
// console.log(arrA);
// a = arrA.join('');
// console.log(a);

// a = [1,2,3,4,5,6]
// console.log(a);
// index = a.indexOf(5);
// if (index !== -1) {
//   console.log('Элемент найден!')
// } else {
//   console.log('Элемент НЕ найден!')
// }
//
// isFound = a.includes(5);
// console.log(isFound);
// if (isFound) {
//   console.log('Элемент найден!')
// } else {
//   console.log('Элемент НЕ найден!')
// }
//

a = 'lorem ipsum dolor ipsum sit amet';
// word = 'hello';
// console.log(a);
// index = a.indexOf(word);
// console.log(index);
// isFound = a.includes(word);
// console.log(isFound);

newA = a.replace('ipsum', 'hello');
console.log(newA);
console.log(a);
