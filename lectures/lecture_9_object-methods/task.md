### Задание 1.
Посчитать сколько животных какого вида при помощи reduce
```js
let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
let petCounts = // ваш код
console.log(petCounts);
/**
 * {
 *   dog: 2,
 *   chicken: 3
 *   rabbit: 1,
 *   cat: 1
 * }
 *
*/
```

### Задание 2.
Перегруппировать данные. В исходном объекте ключ это название города, а его значение – страна, в которой город расположен. 
В результате мы должны получить объект, в котором города сгруппированы по странам. Пример:
```js
let cities = {
  New_York: 'USA',
  Lyon: 'France',
  Berlin: 'Germany',
  Los_Angeles: 'USA',
  Munich: 'Germany',
  Frankfurt: 'Germany',
  Paris: 'France',
  Kyiv: 'Ukraine',
  Kharkiv: 'Ukraine'
};

let countries = // ваш код
              
console.log(countries);
}
/**
 * countries = {
 *   USA: ["New_York", "Los_Angeles"],
 *   France: ["Lyon", "Paris"], 
 *   Germany: ["Berlin", "Munich", "Frankfurt"], 
 *   Ukraine: ["Kyiv", "Kharkiv"]
 * }
 */
```
