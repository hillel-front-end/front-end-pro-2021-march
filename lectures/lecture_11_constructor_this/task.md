### Задание 1.
Реализовать калькулятор, сохраняющий историю операций.
Реализация должна состоять из двух объектов, созданных при помощи функций-конструкторов.
1. `ActionLog` – имеет методы:
   `push(data)` – добавляет элемент в историю 
   `clear()` – очищает историю
   `getByIndex(index)` – возвращает элемент из истории по индексу
   `getLength()` – возвращает, сколько записей уже есть в истории
   
2. `Calculator` – должен использовать `ActionLog` и иметь методы: 
   `sum(a, b)` – складывает a и b, возвращает результат
   `sub(a, b)` – вычитает a и b, возвращает результат
   `div(a, b)` – делит a и b, возвращает результат
   `mul(a, b)` – умножает a и b, возвращает результат
   `getLastResult()` – возвращает результат последней операции
   `printHistory()` – выводит историю операций в консоль в формате:
        operation: sum; a: 1, b: 2; result: 3,
        operation: mul; a: 5, b: 3; result: 15
        operation: div; a: 12, b: 6; result: 2,
   Если еще ни одна операция не выполнена – вывести "History is empty".
   `clearHistory()` – очищает историю
   
Пример использования:

```js
let calc = new Calculator();
calc.sum(1, 2);
calc.mul(5, 3);
calc.div(12, 6);

let lastResult = calc.getLastResult();
console.log("Last result is: ", lastResult) // 2

calc.printHistory();
// operation: sum, a: 1, b: 2, result: 3,
// operation: mul, a: 5, b: 3, result: 15
// operation: div, a: 12, b: 6, result: 2,

calc.clearHistory();

calc.printHistory(); // History is empty
```
