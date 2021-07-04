console.log("Lecture 28. Event Loop")

/*

Структура:

1. Callstack
   https://ru.wikipedia.org/wiki/Стек#/media/Файл:Lifo_stack.png
   https://www.geeksforgeeks.org/stack-data-structure/
2. Push –> Pop –> Garbage Collection
3. Однопоточный, потому, что 1 callstack
4. Пока callstack занят, ничего нельзя выполнить, так как выполняется только 1 задача в один момент времени
5. Время в setTimeout – время, до регистрации в очереди, а не выполнения кода

Типы задач:
– Task (macrotask) – run script + setTimeout, setInterval, requestAnimationFrame
– Microtask – process.nextTick, Promises, queueMicrotask, MutationObserver
– Rendering

Кол-во выполнений за "раз"
– Task – 1шт.
– Microtask – все подряд, до опустошения стека microtasks. Новые выполняются сразу же
– Rendering – все в текущем стеке. Новые выполняются на следующей итерации

Demos
– callstack (nested functions call)
– UI Blocking setTimeout(() => {}, 0) with alert();
– loupe
– Color changing / performance tab
– Microtask (promise resolve + Jake Archibald)
– chrome /

 */

/**
 * процесс запуска кода
1) takes the contents of the input file;
2) wraps it in a function;
3) associates that function as an event handler that is associated with the “start” or “launch” event of the program;
4) performs other initialization;
5) emits the program start event;
6) the event gets added to the event queue;
7) the Javascript engine pulls that event off the queue and executes the registered handler, and then (finally);
8) our program runs! — “Asynchronous Programming in Javascript CSCI 5828: Foundations of Software Engineering Lectures 18–10/20/2016” by Kenneth M. Anderson
**/



// debugger;
// console.log("start")
//
// function f1() {
//   console.log('f1');
// }
//
// function f2() {
//   console.log('f2');
//   f1();
//   console.log('f2 end');
// }
//
// function f3() {
//   console.log('f3');
//   f2();
//   console.log('f3 end');
// }
//
// f3();
//
// f2();
//
// console.log("end")

console.log("start");

const t0 = performance.now();

setTimeout(function() {
  console.log('In timer')
  const t1 = performance.now();
  console.log(`${t1 - t0} milliseconds.`);
}, 1000)


for (let i = 0; i < 10000000000 / 2; i++) {
  console.log('1');
}



// alert("Alert");
console.log("end");




















