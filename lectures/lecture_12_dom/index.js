console.log('Lecture 12');

/*

Lecture 12. DOM

Структура:
  – Web APIs
  – DOM
  – Script order loading
  – className
  – classList
  – finding element
     –   querySelector
     –   querySelectorAll  --- snapshot

     –   getElementById
     –   getElementsBy___  --- live collection

 */

// var a - function scope
// let b - block scope

// if (true) {
//   let a = true;
// }
// console.log(a);

// ------ let vs const ------
// let a = 10;
// const b = 10;
// a = 20;
// console.log(a);
// const c = b + 10;
// console.log(b);

// let a = { x : 10 };
// const b = { x : 10 };
// console.log(b);
// b.x = 20;
// console.log(b);
// const c = [];
// c.push(30);
// console.log(c);

// var user = {}
// user.sayMyName = function () {
// }
//
// user.sayMyName();

// console.log(document.body.className);
// document.body.className = 'somename2';

// document.body.classList
// document.body.classList.add
// document.body.classList.remove
// document.body.classList.toggle
// document.body.classList.forEach

// document.querySelector
// document.querySelectorAll

// const element = document.querySelector('.user-card .user-card__name');
// const element = document.querySelector('.user-card h5');
// const element = document.querySelector('.user-card div:first-child');
// const element = document.querySelector('.user-card div:nth-child(2)');
// const element = document.querySelector('.user-card div');
// console.log(element);

// const element = document.querySelectorAll('body div');
// console.log(element);

// const userCard = document.querySelector('.user-card');
// const userCardName = userCard.querySelector('h5');
// console.log(userCardName, userCard);


// returns static collection
// const element = document.querySelectorAll('body div');
// const userCard = document.querySelector('.user-card');

// returns live collection
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// const element = document.querySelector('.user-card .user-card__name');
// const element = document.querySelector('.user-card');
// console.dir(element.style.color);
// element.style.color = 'blue';
// console.log(element.style);
// console.log(element.style.fontSize);
// element.style.fontSize = '20px';
// element.style.lineHeight = '2';
// console.log(element.style.fontSize);

// console.log(getComputedStyle(element, ':before'));


















