console.log('Lecture 19. DOM OOP');

/*

Lecture 19. DOM OOP

Структура:

  – Проблематика (масштабируемость и читаемость)
  – Абстракция

  – Абстрактный тип данных
  – Класс – реализация абстрактного типа данных в программировании, описание характеристик и поведения будущего представителя это класса
  – Экземпляр класса – конкретный представитель типа (конкретный кот :))

  – Полиморфизм
  – Инкапсуляция
  – Наследование

  – "Нельзя" изменять класс после объявления
  – Поля (свойства) и методы
  – constructor, super
  – static
  – extends
  – private fields

 */

// Context Menu
// Gallery
// Game Field & Player
// Phone
// Calculator

// function Person(age, name) {
//   this.age = age;
//   this.name = name;
//
//   this.move = function() {
//     console.log('moving!');
//   }
// }
//
// function Cat(color, type) {
//   this.color = color;
//   this.type = type;
// }
//
// function TodoItem(priority, title, status, date) {
//   this.priority = priority;
//   this.title = name;
//   this.status = status;
//   this.date = date;
//
//   this.changeStatus = function(status) {
//     this.status = status;
//   }
//
//   this.render = function() {
//     const template = `
//       <div>${this.title}</div>
//     `
//     const div = document.createElement('div');
//     div.innerHTML = template;
//     document.querySelector('#todo-list').append(div)
//   }
// }
//
// const todos = [new TodoItem(), new TodoItem(), new TodoItem()];
//
// todos.forEach(function(todo) {
//   todo.render();
// })
//
//
//
// const vasya = new Person(30, "Vasya");
// const barsik = new Cat('black', 'metis');


// Наследование (inheritance)
// function Vehicle() {
//   this.speed = 0;
//   this.dir = '';
// }
//
// Vehicle.prototype.move = function () {
//   console.log('Moving!');
//   this.dir = 'forward';
//   this.speed = 10;
// }
//
// Vehicle.prototype.stop = function () {
//   console.log('Stopped!');
//   this.dir = '';
//   this.speed = 0;
// }
//
// function Boat(paddlesCount) {
//   this.paddlesCount = paddlesCount;
// }
//
// function Car(wheelsCount) {
//   this.wheelsCount = wheelsCount;
// }
//
// Boat.prototype = Object.create(Vehicle.prototype);
// Car.prototype = Object.create(Vehicle.prototype);
//
// const myBoat = new Boat(4);
// const myCar = new Car(4);
//
// myBoat.move();
// myBoat.move();
// myBoat.stop();


// Инкапсуляция
// function ContextMenu(selector, offset) {
//   this.x = 0;
//   this.y = 0;
//   this.offset = offset
//   this.menu = document.querySelector(selector);
//
//   const prefix = 'test_prefix';
//
//   // this.getSelectorWithPrefix = function() {
//   //   return prefix + selector;
//   // }
//
// }
//
// ContextMenu.prototype.open = function(x, y) {
//   this.x = x + this.offset;
//   this.y = y + this.offset;
//
//   if (this.x + menu.offsetWidth > window.innerWidth) {
//     this.x = x - menu.offsetWidth;
//   }
//
//   this.menu.style.left = this.x + 'px';
//   this.menu.style.top = this.y + 'px';
//   this.menu.classList.remove('hidden');
// }
//
// ContextMenu.prototype.close = function() {
//   this.menu.classList.add('hidden');
// }
//
// const contextMenu = new ContextMenu('#menu', 5);
// contextMenu.open(50, 50);

// Полиморфизм
// function Person() {
// }

// Java
// Person.prototype.say = function(text) {
// console.log(text);
// }

// Person.prototype.say = function(text) {
//   console.log('text');
// }
//
// Person.prototype.say = function(text1, text2) {
//   console.log('text1 text2');
// }
//
// Person.prototype.say = function(words) {
//   console.log('words');
// }

// JavaScript
// Person.prototype.say = function(data) {
//   if (data.text) {
//     console.log('text');
//   } else if (data.text1 && data.text2) {
//     console.log('text1 text2');
//   } else if (data.words) {
//     console.log('words');
//   }
// }

// Person.prototype.say = function(data) {
//   if (typeof data === 'string') {
//     console.log("plain text");
//   } else {
//     console.log('array of word!');
//   }
// }

// const p = new Person();

// Java
// p.say("Hello!");
// p.say("Hello!", "World!");
// p.say(["Hello!", "World!"]);

// JavaScript
// p.say({ text : 'Hello!' });
// p.say({ text1 : 'Hello!', text2 : 'World!' });
// p.say({ words : ['Hello!', 'World!'] });

// p.say(['hello', 'hello2'])
// p.say(['hello'])
// p.say('hello')


// function Person(age) {
//    this.age = age;
// }
//
// Person.prototype.sayHello = function() {
//   console.log("hello!");
// }
// Person.prototype.sayAge = function() {
//   console.log('My age is', this.age);
// }

// const p = new Person();
//
// console.dir(p);


// class Person {
//   constructor(age) {
//     this.age = age;
//   }
//
//   sayHello() {
//     console.log('Hello!');
//   }
//
//   sayAge() {
//     console.log('My age is', this.age);
//   }
// }
//
// class Arabian extends Person {
//   constructor(age) {
//     super(age)
//   }
// }

// const p = new Person(20);
// const p = new Arabian(20);
// console.dir(p);



// function Shoes() {
//
// }
//
// Shoes.getShoesType = function() {
//   console.log('From Function');
//   return ['type1', 'type2', 'type3'];
// }

// class Shoes {
//   static getShoesType() {
//     console.log('From Class');
//     return ['type1', 'type2', 'type3'];
//   }
// }

// Shoes.prototype.getShoesType = function() {
//   return ['type1', 'type2', 'type3'];
// }
// const shoe = new Shoes();
// console.log(shoe.getShoesType());
// console.log(Shoes.getShoesType());


class ContextMenu {

  #offset;
  #x;
  #y;

  constructor() {
    this.#offset = 5;
    this.#x = 0;
    this.#y = 0;
    this.menu = document.createElement('div');
  }

  #processPosition(x, y) {
    this.#x = x + this.#offset;
    this.#y = y + this.#offset;
    if (this.#x + this.menu.offsetWidth > window.innerWidth) {
      this.#x = x - this.menu.offsetWidth;
    }
  }

  #showMenu() {
    this.menu.style.left = this.#x + 'px';
    this.menu.style.top = this.#y + 'px';
    this.menu.classList.remove('hidden');
  }

  open(x, y) {
    this.processPosition(x, y);
    this.showMenu();
  }

  close() {

  }

}

const menu = new ContextMenu();
