console.log('Lecture 13');

/*

Lecture 13. DOM Events

Структура:
  – События интро
     – Клавиатура
     – Указатели (мышь, тачкрин, стилус, графический планшет)
     – Window (общение между окнами, открытие/закрытие)
     – Custom Events
  – DOM 0 Events
     – добавить событие
     – удалить события
     – проблема DOM 0 Events
  – DOM 2 Events
     – добавить событие
     – удалить событие
     – Event Listeners
     – наследование от EventTarget

  – Объект события
     – shift, ctrl, alt, meta
     – pageX, pageY, clientX, clientY


  – События мыши
     – mousedown
     – mouseup
     – click
     – dblclick
     – contextmenu
     – mousemove / неточность событий
     – когда событие не вызывается

  – События клавиатуры
     – keydown (свойство repeat)
     – keypress
     – keyup

  – Form Events
     – input
     – change
     – focus
     – blur
 */


// const block = document.querySelector('#block');
// console.dir(block);
//
// function f1() {
//   console.log('f1');
// }
//
// function f2() {
//   console.log('f2');
// }
//
// block.onmouseover = function() {
//   f1();
//   f2();
// }
//
// block.onmouseover = function() {
//   console.log('over!');
// }
//
// block.onmouseover = null;
//
// block.onmouseout = function myMouseOut() {
//   console.log('out!');
// }

// function f1() {
//   console.log('over!');
// }

// var f1 = function() {
//   console.log('over!');
// }
//
// block.addEventListener('mouseover', f1)
// block.addEventListener('mouseover', function() {
//   console.log('over 2!');
// });
// block.removeEventListener('mouseover', f1);

// block.addEventListener('mouseover', function(e) {
//   console.log('mouseover!');
//   e.target.style.backgroundColor = '#b1b1b1'
// });
// block.addEventListener('mouseenter', function(e) {
//   console.log('mouseenter!');
//   e.target.style.backgroundColor = '#b1b1b1'
// });
// block.addEventListener('mouseout', function(e) {
//   console.log('mouseout!');
//   e.target.style.backgroundColor = '#a75353'
// });
// block.addEventListener('mouseleave', function(e) {
//   console.log('mouseleave!');
//   e.target.style.backgroundColor = '#a75353'
// });

// block.addEventListener('click', function(e) {
//   console.log('click!');
//   // e.target.style.backgroundColor = '#a75353'
// });
// block.addEventListener('mousedown', function(e) {
//   console.log('down!');
//   e.target.style.backgroundColor = '#a75353'
// });
// block.addEventListener('mouseup', function(e) {
//   console.log('up!');
//   e.target.style.backgroundColor = '#b1b1b1'
// });

// const menu = document.querySelector('#menu');
// const menuElements = document.querySelectorAll('#menu li');
//
// menuElements.forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     alert(e.target.innerHTML);
//     menu.style.display = 'none';
//   })
// })

// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
//   console.log('menu is opened');
//
//   menu.style.top = e.pageY + 'px';
//   menu.style.left = e.pageX + 'px';
//   menu.style.display = 'block'
// })

// Mouse Events
// mouseover
// mouseenter
// mouseout
// mouseleave
// click
// mousedown
// mouseup
// contextmenu


// block.addEventListener('mousedown', function(e) {
//   console.log(e);
// });
// block.addEventListener('pointerdown', function(e) {
//   console.log(e);
// })

// Form Events
// input
// change
// focus
// blur

// const input = document.querySelector('#textInput');
// input.addEventListener('input', function(e) {
//   console.log('input');
// });

// input.addEventListener('change', function(e) {
//   console.log('change');
//   console.log(e.target.value);
// });
//
// input.addEventListener('focus', function(e) {
//   console.log('focus');
// });
//
// input.addEventListener('blur', function(e) {
//   console.log('blur');
//   console.log(e.target.value);
// });


// Keyboard Events
// keydown
// keypress
// keyup

// input.addEventListener('keydown', function(e) {
//   console.log(e.code, e.key);
//   console.log('keydown');
// });
// input.addEventListener('keyup', function(e) {
//   console.log('keyup');
// });
// input.addEventListener('keypress', function(e) {
//   console.log('keypress');
// });











