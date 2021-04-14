sum()
function sum() {
  inner();
  function inner() {
    console.log(this);
  }
}
// Пример 1. Что будет выведено в консоль?


function Person() {
  this.name = "Jim"
}
Person();
console.log(name);
// Пример 2. Что будет выведено в консоль?
