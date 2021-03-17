console.log('Lecture 2');

/*

Lecture 2. Conditions, booleans, loops

По домашним работам:
    – почему "0"
    – 3.33333333332

Структура:
    - почему не используем "var"
    - boolean
      -   это всегда "да" или "нет" (true / false), являются результатом сравнения
      -   таблица истинности
      -   базовые условия: [>,<,==,===,!=,!==] (возраст, кол-во денег)
      –   комбинация условий: &&  ||  ! (возраст, деление людей на возрастные группы)
      -   false: undefined, null, NaN, '', 0, false
      -   true: всё, что "не пустое"

      -   приоритет выполнения
      -   приведение в булевый тип (!!)
      -   строгая проверка типов
    - if, else if, else (netflix; регистрационная форма (в зависимости от возраста, страны доп. условия)
    – isNaN()
    - loop "do...while", "while"
    - loop "for"
      - continue
      - break
      - be aware of "i += 2" and exact conditions "i === 3"

Практика:
    - заставить пользователя вводить число
    – улучшить домашнюю работу с объемом цилиндра (разрешить одному параметру быть необязательным)

*/

// a = 20;
// b = 10;
// c = a > b;
// console.log(c);


// c1 = a > b;
// c2 = a < b;
// c3 = a == b;
// c4 = a != b;
// c5 = a >= b;
// c6 = a <= b;
//
// console.log(c1 + ' ' + c2, c3);
// console.log('true false', c3);
// console.log(c1, c2);

// console.log(typeof "hello");
// console.log(typeof "hello1221");
// console.log(typeof "1221");
// console.log(typeof 12);

// age = 20;
// money = 10;
// isPermitted = age > 18 && money > 5;
// isPermitted = false && true;
// console.log(isPermitted);

// time = 1.5;
// studentsCount = 4;

// && – "И"
// || – "ИЛИ"
// canStartLecture = time >= 2 || studentsCount == 4;
// console.log(canStartLecture);

// console.log(1 == '1');
// console.log(1 == 1);
// console.log(1 === '1');

// a = 10;
// b = 2;
// c = 30;


// result = a > 10 && b < 3 || c !== 2;
// result = false && true || true;
// result = false && true || true;
// result = false || true;
// result = true;

// result = (a > 10 && b < 3) || c !== 2;
// result = (false && true) || true;
// result = false || true;

// result = a > 10 && (b < 3 || c !== 2);
// result = false && (b < 3 || c !== 2);
// result = false && (true || true);
// result = false && false;
// console.log(!result);

// age = prompt("Enter your age");
// console.log(typeof age);
// isPermitted = !(age < 18);
// console.log(isPermitted);

/*
if (выражение) {
  // true logic
} else {
 //  false logic
}
 */

// userAge = +prompt("Enter your age");
// matureAge = 18;

// if (userAge >= matureAge) {
//   console.log("Продаю!");
// } else {
//   console.log("Вы еще маленький :(");
// }

// console.log(!!(userAge - "hello"));
// if (userAge + "hello") {
//   // 12hello
//   console.log("Ваш возраст:", userAge);
// }

/*
  false: 0, "", NaN
 */

// console.log(userAge - "hello");
// console.log(NaN);
// console.log(!NaN === true);
// console.log(!false === true);
// console.log(!!false === true);

// str = "hello";
// if (!!str) {
//   console.log("Str is: ", str);
// }

// a = +prompt("Enter first number");
// if (a) {
//   b = prompt("Enter second number");
//   console.log(a * b);
// }

// a = +prompt("Enter first number");
// c = prompt("Введите операцию");
// b = +prompt("Enter second number");
//
// if (c === '+') {
//   if (a === 2) {
//     console.log('c is plus and a is 2');
//   }
//   console.log(a + b);
// }

// ********************************************************

/*
do {
  // your code here
} while(boolean expression == true);
 */

// do {
//   a = prompt("Enter a number");
//   console.log(a);
// } while(a == "");

// console.log("Valid a is: ", a);

// ********************************************************

/*
while(boolean expression == true) {
  your code is here
}
 */

// a = "";
// while(a == "") {
//   a = prompt("Enter a number");
// }
// console.log(a);

// ********************************************************

/*
 for(#1, #2, #3) {
    #4
 }

 #1 – объявление значений
 #2 - условие
 #3 - действие на каждой итерации
 #4 - код

 for(i = 0; i < 10; i = i + 1) {
    console.log("i:", i);
 }
 */

// for(i = 0; i < 10; i++) {
//   console.log("i:", i);
// }

// i = i + 1;
// i += 1;
// i++;

// i = i + 2;
// i += 2;
// i++;

// i = 0;
// console.log(i++); // 0
// console.log(i);   // 1

// console.log(++i);    // 1
// console.log(i);      // 1

// for (i = 0; i != 10; i += 3) {
  // if (i % 2 === 0) {
  //   console.log("Четное", i);
  // } else {
  //   console.log("Нечетное", i);
  // }
  // if (i === 6) {
  //   console.log("I равно 4");
  //   break;
  // } else if (i === 5) {
  //   i = i - 1;
  //   continue;
  // }
  // if (i === 5) {
  //   continue;
  // }
  // console.log(i);
// }
// console.log("I'm here!");

// console.log(!NaN);
// console.log(isNaN(NaN));

inputNumber = '';
do {
  input = prompt("Enter number");
  if (input === "") {
    continue;
  }
  inputNumber = +input;
} while(isNaN(inputNumber));
// } while(a === NaN);














