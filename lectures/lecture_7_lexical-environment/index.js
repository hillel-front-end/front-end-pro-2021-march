console.log('Lecture 7');

/*

Lecture 7. Lexical Environment

1. Block-scoped variables (Блочная область видимости) и оператор let (на прошлой лекции мы изучили функциональную область видимости)
   –   let объявляет переменные в блочной области видимости
   –   не позволяет создать еще одну переменную с таким же именем
   –   не влияет на глобальную область видимости
   –   благодаря блочной области оптимизирует работу памяти

2. Lexical Environment (Лексическое окружение) – это невидимый объект к которому у нас нет прямого доступа, состоит из локальных переменных
   и ссылки на родительский LE. Механизм определяет то, как переменные разрешаются (находятся) интерпретатором.
   -   Когда создается и заполняется? (scope – во время определения функции, variables – во время вызова)
   –   Из чего состоит? (environment record (local scope) + outer (link to scope of its parent))
   –   Closures (замыкания)
   –   Пример: паттерн итератор
   –   Пример: вызов функции определенной в global scope внутри другой функции
   –   Жизненный цикл переменной

3. Hoisting (поднятие вверх)
   -   var and function declaration
   –   let (temporal dead zone)
   –   importance of order

4. Построчный разбор LE Environmental Records

Important Notes:
1. Замыкание существует только тогда, когда интерпретатор взял переменную из родительской области видимости,
   но не global scope.
2. В замыкании живут только те переменные, которые были использованы в дочернем LE
3. Не важно где функция была вызвана, её outer scope всегда зависит от того, где функия была объявлена

 */

// a = 10;
// let b = 20;
// if (a === 10) {
//   console.log(a);
//   b = 10;
//   b = 20;
// }

// a = 10;
//
// var a = 10;
// var a = 120;
// var a = 130;

// var c = 5;
// let d = 6;
// console.log(window);

// for (let i = 0; i < 3; i++) {
//
// }
// console.log(i);

// let b
//
// if (true) {
//   b = 'hello'
// }

// var globalSomething = "I'm global";

// function firstLevelOne(a, b) {
//   /**
//    * firstLevelOne.LexicalEnvironment = {
//    *    environmentalRecords: {
//    *      a: undefined,
//    *      b: undefined,
//    *      firstLocal: undefined
//    *    },
//    *    outer: [[Global]]
//    * }
//    */
//
//   var firstLocal = true;
// }

// function firstLevelTwo() {
//   /**
//    * firstLevelTwo.LexicalEnvironment = {
//    *    environmentalRecords: {
//    *      firstLocal: undefined
//    *      secondLevel: fn
//    *    },
//    *    outer: Global
//    * }
//    */
//
//   var firstLocal = true;
//
//   function secondLevel() {
//     /**
//      * secondLevel.LexicalEnvironment = {
//      *    environmentalRecords: {},
//      *    outer: firstLevelTwo.LexicalEnvironment
//      * }
//      */
//     /*
//
//     if (firstLevelOne.LexicalEnvironment.environmentalRecords['firstLocal'] !== undefined) {
//        return firstLevelOne.LexicalEnvironment.environmentalRecords['firstLocal'];
//     } else if (firstLevelOne.LexicalEnvironment.outer.LexicalEnvironment.environmentalRecords['firstLocal']) {
//
//     }
//
//      */
//     console.log(asdasd);
//   }
//   secondLevel();
//   console.dir(secondLevel);
// }

// console.log(firstLevelOne);
// console.dir(firstLevelOne);

// firstLevelOne();
// firstLevelTwo();

// var x = 10;
//
// function f1() {
//   var x = 20;
//   f2()
// }
//
// function f2() {
//   /**
//    * f2.LexicalEnvironment = {
//    *    environmentalRecords: {},
//    *    outer: window
//    * }
//    */
//   console.log(x);
// }

// var x = 10;
//
// function f1() {
//   var f1local = 1;
//   function f2() {
//     // console.log(f1local);
//     // debugger;
//     var f2local = 2;
//
//     console.log(x);
//     console.log(f1local);
//     // f2local – variable from local scope
//     // x       - variable from global scope
//     // f1local - variable from closure
//
//     // console.log(f2local);
//   }
//   f2()
// }
// f1();
// var x = 10;

// function f1() {
//   var f1local = 1;
//   var f2local;
//   function f2() {
//     /**
//      * LexicalEnvironment = {
//      *    environmentalRecords: {
//      *
//      *    },
//      *    outer: f1.LexicalEnvironment
//      * }
//      */
//     console.log(f2local);
//     // console.log("I'm from closure", f1local);
//     debugger;
//   }
//
//   return f2;
// }
//
// var myFunc = f1();
// // console.log(f2local);
// myFunc();

// function factory() {
//   let counter = 0;
//
//   function increaseCounter() {
//     if (counter === 3) {
//       counter = 0;
//     }
//     counter++;
//     return counter;
//   }
//
//   return increaseCounter;
// }
//
// let addOne = factory();
// console.log(addOne());
// console.log(addOne());
// console.log(addOne());
// console.log(addOne());


// function firstLevelTwo(a, b) {
//                             //
//                             /*
//                             firstLevelTwo.LE = {
//                               a: undefined,
//                               b: undefined,
//                               firstLocal: undefined,
//                               secondLevel: fn,
//                               secondLocal: TDZ (Temporal Dead Zone)
//                             }
//                              */
//   var firstLocal = true;    // firstLevelTwo.LE = { a: undefined, b:undefined, firstLocal: undefined, secondLocal: TDZ, secondLevel: fn }
//                             // firstLevelTwo.LE = { a: undefined, b:undefined, firstLocal: true, secondLocal: TDZ, secondLevel: fn }
//   let secondLocal = 222;    // firstLevelTwo.LE = { a: undefined, b:undefined, firstLocal: true, secondLocal: TDZ, secondLevel: fn }
//                             // firstLevelTwo.LE = { a: undefined, b:undefined, firstLocal: true, secondLocal: 222, secondLevel: fn }
//   function secondLevel() {
//
//   }
// }
//
// firstLevelTwo();

// console.log(a2());
// a = 223;
// var a = 222;
// function a2() {
//   console.log('hello');
// }

// var b = a + 30, a = 10;
// console.log(a, b);

// var test = 20;
// function f1() {
//   console.log(test);
//   var test = 10;
//   if (test) {
//     let test = test + 20;
//     console.log(test);
//   }
//   // console.log(test)
// }
// f1();
//

// function go(n) {
//   // n here is defined!
//   console.log(n); // Object {a: [1,2,3]}
//
//   for (let n in n.a) {
//     console.log(n);
//   }
// }
//
// go({a: [1, 2, 3]});























