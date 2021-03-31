### Задание 1.
Написать функцию `createIterator(array)`, принимающую в себя массив целых чисел и возвращает функцию, при многоразовом вызове которой мы получаем каждый следующий элемент массива.
Пример:
```js
var getNextElement = createIterator([1,2,5,3,1,5]);
var nextValue = getNextElement(); // 1
nextValue = getNextElement();     // 2
nextValue = getNextElement();     // 5
nextValue = getNextElement();     // 3
```

### Задание 2.
Адаптировать задание №2, чтобы возвращаемая функция принимала в себя callback для модификации значения перед его возвратом:
Пример:
```js
function multiplyByTwo(value) {
  return value * 2;
}

var getNextElement = createIterator([1,2,5,3,1,5]);
var nextValue = getNextElement(multiplyByTwo); // 2
nextValue = getNextElement(multiplyByTwo);     // 4
nextValue = getNextElement(multiplyByTwo);     // 10
nextValue = getNextElement(multiplyByTwo);     // 6
```
Важно – проверить, что функция-callback была передана, то есть код ниже тоже должен работать:
```js
function multiplyByTwo(value) {
  return value * 2;
}

var getNextElement = createIterator([1,2,5,3,1,5]);
var nextValue = getNextElement();              // 1
nextValue = getNextElement(multiplyByTwo);     // 4
nextValue = getNextElement();                  // 5
nextValue = getNextElement(multiplyByTwo);     // 6
```
