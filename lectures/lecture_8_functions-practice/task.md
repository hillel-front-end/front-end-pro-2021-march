### Задание 1.
Написать функцию fromPairs(arr1, arr2, ..., arrN), принимающая неограниченное кол-во массивов 
(где первый элемент каждого – имя ключа, второй – его значение) и создающая на их основе новый объект. 
Пример:
```js
let pairs = fromPairs([['a', 1], ['b', 2]]);
console.log(pairs) // { 'a': 1, 'b': 2 }
```

### Задание 2.
Написать функцию findIndex(array, predicateFunction), которая принимает массив объектов, и находит индекс элемента
согласно функции-предикату predicateFunction.
Если элемент не найден – вернуть -1:
Пример:
```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
let index = findIndex(users, function(o) { return o.user === 'pebbles'; });
console.log(index) // 2
```

### Задание 3.
Написать функцию groupBy(array, fieldName), которая принимает массив объектов, и группирует их по fieldName.
Пример:
```js
var pigeons = [
  { id : 1, type: 'ICE_PIGEON', name: 'Jessica' },
  { id : 2, type: 'DUTCH', name: 'Homer' },
  { id : 3, type: 'ORIENTAL', name: 'Kim' },
  { id : 4, type: 'ICE_PIGEON', name: 'Peter' },
  { id : 5, type: 'DUTCH', name: 'Rachel' },
];
let groups = groupBy(pigeons, 'type');
console.log(groups);
/**
 * groups = {
 *   ICE_PIGEION: [
 *     { id : 1, type: 'ICE_PIGEON', name: 'Jessica' },
 *     { id : 4, type: 'ICE_PIGEON', name: 'Peter' }
 *   ],
 *   DUTCH: [
 *     { id : 2, type: 'DUTCH', name: 'Homer' },
 *     { id : 5, type: 'DUTCH', name: 'Rachel' }
 *   ],
 *   ORIENTAL: [
 *     { id : 3, type: 'ORIENTAL', name: 'Kim' }
 *   ]
 * }
 */
```

