### Задание 1.
Научить все объекты выводить своё содержимое в документ. Для этого реализовать метод `renderObject`.
Пример:
```js
let person = {
  firstName: "Jim", 
  lastName: "Peterson",
  age: 32
};

person.renderObject();

/**
 <ul>
     <li>fisrtName: Jim</li>
     <li>lastName: Peterson</li>
     <li>age: 32</li>
 </ul>
*/
```

### Задание 2.
Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:
```js
obj.m1().m2().m3();
obj.m2().m1().m3();
obj.m2().m1().m3().m1().m1();
```
