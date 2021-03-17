console.log('Lecture 3');

/*

Lecture 3. Arrays

// упорядоченная последовательность переменных собранных под одним именем
// отдельные переменные, обернутые в структуру, для простоты доступа к ним

Структура:
    – Что такое массив и зачем нужен (как посчитать среднюю оценку 100 учеников?)
    - Терминология и структура:
       –   каждый элемент имеет свой индекс (номер) (пример комнатами на этаже)
       –   индексация с нуля
       -   длинна (размерность)
       –   индексация происходит автоматически
       –   в JS массивы автоматически подстраивают размер
    - Создание и заполнение массива (вручную)
       -   []
       -   демонстрация структуры (console.log)
       -   инициализация с пропусками
       –   пример с динамической длинной (length всегда актуальное состояние)
    - Представление в памяти (различие C и JS)
    - Доступ к элементам (первый/последний)
    - Заполнение массива в цикле
       -   ввод каждого значения
       -   проход по элементам массива
       -   пример с автоподстройкой размера
       -   завязка на length
    - Подсчет суммы (степени) элементов
       -   сначала всегда обнулить
       -   заполнение случайными числами

    - Методы массивов:
       -   push(number)                     -> length
       -   pop()                            -> number
       -   shift()                          -> number
       -   unshift(number)                  -> length
       -   slice(start, end)                -> new array  // [ (
       -   splice(index, count, [...items]) -> same array

    - Поиск элементов массива
    - Модуль Math: pow, floor, round, ceil, trunc, abs, random

*/

// a = [];
// console.log(a);

// a = [100,300,400,200,500];
// console.log(a);
// console.log(a[3])
// console.log(a.length);

// for (i = 0; i )

// a = [];
// a.length = 8;

// a = [2,3,4,5]

// console.log(a.length);
// console.log(a);
//
// a.length = 2;
//
// console.log(a);

// a = [2,3,4,5, true, 'hello', 2]
// console.log(a);
// a[20] = 'hello2';

// console.log(a);

// a = [];
// n = 9;
// a.length = n;
// a.length = 9;


// for (i = 0; i < a.length; i++) {
//   a[i] = i * 10;
// }
//
// console.log(a);
// console.log(a[0]);
// console.log(a[a.length - 1]);


// a = [1,2,3,4,5];

// sum = 0;
// for (i = 0; i < a.length; i++) {
//   // sum = sum + a[i];
//   sum += a[i];
// }
//
// console.log(sum);

// a = ['hello', 'world', 'welcome', 'here'];
//
// // console.log(a);
//
// word = 'world';
// result = false;
//
// for (i = 0; i < a.length; i++) {
//   if (a[i] === word) {
//     console.log(i);
//     result = true;
//     break;
//   }
// }
//
// if (result) {
//   console.log('Слово ' + word + " найдено!");
// } else {
//   console.log('Слово ' + word + " НЕ найдено!");
// }

// a = [1,2,3,4,,,,5];
// console.log(a);

// -   push(number)                     -> length
// -   pop()                            -> number
// -   shift()                          -> number
// -   unshift(number)                  -> length
// -   slice(start, end)                -> new array  // [ (
// -   splice(index, count, [...items]) -> same array

// a = [1,2,3,4,5];
// console.log(a);
//
// b = a.push(9);
// console.log(a);
// console.log(b);
//
// b = a.pop();
// console.log(b);
// console.log(a);

// a = | [3,2,4,5,6];
// a = 3 | [2,4,5,6];
// a = [3,2,4,5,6];
// console.log(a);
// console.log(a.shift());
// console.log(a);
// a.unshift(3, 2, 3);
// console.log(a, 'hello', 'world');

// a = [3,2,4,5,6];
// b = a.slice(1, 3);
// console.log(b);

// b = a.slice(0, -1);
// console.log(b);
// console.log(a);

// console.log(a);
// a = a.slice();
// a.splice(0, 2);
// console.log(a);
// a.splice(2, 2, 0,0,0,0,0);
// console.log(a);































