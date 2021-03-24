// console.log('Lecture 5');

/*
Lecture 5. Objects

Структура:
    - Что такое объект (набор переменных, которые характеризуют некоторую сущность, связанные с ней одним именем)
    – Как создаются объекты | { "key1" : value, "key2" : value }
    – Значением может быть примитив (строка / число / булевый), массив или другой объект
    – Доступ к свойствам объекта
       -   Через точку
       -   Через квадратные скобки (ключи объекта – всегда строки)
       –   К свойству, которое не было описано (единичная и двойная вложенность)

    – Схожесть объектов с массивами
    – В JavaScript всё есть объект (посмотреть на прототип) | typeof [], typeof {}

    – Присваивание значений структурных и примитивных типов данных
        -  Примитивы - по значению
        –  Структурные – по ссылке

    – Генерация новых свойств на ходу
    – Удаление свойств
    – Свойства объекта НЕ упорядочены (пример с рюкзаком – видим всё, можем быстро получить доступ, но нет порядка),
               в отличии от массива (сохранен порядок, но нет способа быстро узнать что написано на каждой карточке)

    - Перебор объекта (for ... in)
    – Где применяются объекты

    – Object.values
    – Object.keys
    – Object.entries

    – for .. in (на строке)
    - for .. in (на массиве)
    – empty не является ключом

Практика
    - сделать объект "плоским"

*/

// firstName = "Alex"
// lastName = "Doe"
// age = 20;
//
// firstName2 = "Alex"
// lastName2 = "Doe"
// age2 = 20;

// user1 = {};
// users = [];

// { "key" : value }

// console.log(user1['address']);
// console.log(user1.address.country);
// console.log([1,2,3,4])

// numbersArray = [1,2,3,4]
// numbers = {
//   '1' : 'hello',
//   '2' : 'world',
//   '3' : 'lorem'
// }
// numbers = {
//   world : true,
//   firstName : 2,
//   lastName : 1,
// }

// console.log(numbers[1]);
// console.log(numbersArray[1]);

// user1 = {
//   firstName : 'Alex',
//   lastName : 'Doe',
//   age: 20,
//   address : {
//     country: {
//       code: 'UA',
//       label: 'Ukraine'
//     }
//   },
//   // info : {
//   //   parentName : 'Peter'
//   // },
//   favoriteColours: ['red', 'yellow', 'blue']
// }

// users = [];
// users.push(user1);

// console.log(user1.info)
// console.log(user1.info.parentName)

// user1.info = {};
// user1.info.parentName = 'Peter';
// console.log(user1.info);
// console.log(user1.info);

// user1.info = {
//   parentName : 'Peter'
// };

// console.log(user1);
// delete user1.info
// console.log(user1);
// user1.info = undefined;
// console.log(user1);

// name = '_name';
// console.log(user1['info']);
// user1['info    ' + name] = 3;
// console.log(user1);
// console.log(user1['info    _name']);

// data = {
//   "1" : 'some value',
//   '1name' : 'new value',
// };
// console.log(data['1name']);


// visits = [
//   { doctorName : 'Alex', lastVisitedDate: '2020/02/02'},
//   { doctorName : 'Jack', lastVisitedDate: '2020/02/02'},
//   { doctorName : 'Sarah', lastVisitedDate: '2020/02/02', sick: false},
// ]
//
// user = {
//   firstName : 'Evgeniy',
//   lastName: 'Viniychuk',
//   birthDate: '1980/02/02',
//   visits : visits
// }

// '2020/02/02' ---> '2020-02-02:10:00:00-0300'
// console.log(user);


// a = "hello world";
// b = a;
// a += 'from javascript';
//
// console.log(a === b);

/*

  []

 */


// a = [1,2,3,4];
// b = a;
// a.push(5);

// console.log(a, b);

// user2 = {
//   a : 1,
//   b : 2,
// }
//
// user3 = user2;
// user3.c = 10;

// console.log(user2, user3);

// user2 = {
//   a : 1,
//   b : 2,
// }
// arr1 = [user2];
// arr2 = arr1.slice();
//
// arr2[0].c = true;
//
// console.log(arr1, arr2);

// console.group('Some new group');
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.groupEnd();
//
//
// console.warn("Warning");
// console.error("Error");

// arr1 = [1,2,3,4];
// arr2 = arr1.slice();
// arr2[0] = 100;
// console.log(arr1, arr2);
// user2 = {
//   a : 1,
//   b : 2,
//   nestedUser : {
//     c : 3
//   }
// }
// user3 = Object.assign({}, user2);
// user3.nestedUser = Object.assign({}, user2.nestedUser);

// user3.firstName = 'hello';
// user3.nestedUser.z = 'hello 2';
// console.log(user2, user3);

user = {
  firstName : 'Alex',
  lastName : 'Doe',
  age : 20,
  address : {
    code : 'UA',
    label : 'Ukraine',
  },
  favoriteColours : ['red', 'yellow', 'blue'],
}

// for (key in user) {
//   value = user[key];
//   console.log(key, value);
//
//   if (typeof value === 'object' && !Array.isArray(value)) {
//     for (innerKey in value) {
//       innerValue = value[innerKey];
//       console.log(key + '.' + innerKey, innerValue)
//     }
//   }
// }

// Object.keys
// Object.values
// Object.entries

// console.log(user);
// console.log(Object.keys(user.favoriteColours));
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// arr = Object.entries(user);
// for (i = 0; i < arr.length; i++) {
//   console.log('key', arr[i][0])
//   console.log('value', arr[i][1])
// }













