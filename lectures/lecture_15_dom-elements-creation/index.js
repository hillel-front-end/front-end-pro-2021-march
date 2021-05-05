console.log('Lecture 15. DOM Elements Creation');

/*

Lecture 15. DOM Elements Creation

Структура:

  – nodeType

  – document.createElement()
  – document.createTextNode()

  – append (добавляет в конец)
  – prepend (добавляет в начало)
  – before (перед тегом)
  – after (после тега)
  – replaceWith(...nodes)
  – remove
  – cloneNode(deep)

  – insertAdjacentHTML(where, html) (единственный способ дописать кусок html)
    –  beforebegin
    –  afterbegin
    –  beforeend
    –  afterend

  – insertAdjacentText(where, text) – такой же синтаксис, но строка text вставляется «как текст», вместо HTML,
  – insertAdjacentElement(where, elem) – такой же синтаксис, но вставляет элемент Element.

  – DocumentFragment


Notes:
  Все методы вставки:
    1. автоматически удаляют узлы со старых мест (перемещают).
    2. принимают неограниченное кол-во аргументов
    3. Принимают или текст, или Element

https://jsfiddle.net/merksam/jsvfo20p/4/
https://jsfiddle.net/merksam/sq31wrpu/3/

 */

// const secondaryTitle = document.createElement('h2');
// secondaryTitle.classList.add('yellow-bg');
// secondaryTitle.innerHTML = 'Hello <b>Front</b>';
//
// const container = document.querySelector('#container');
// //
// document.body.append(secondaryTitle);

// setTimeout(function () {
//   container.append(secondaryTitle);
//
//   setTimeout(function () {
//     secondaryTitle.remove();
//
//     setTimeout(function () {
//       secondaryTitle.innerHTML = secondaryTitle.innerHTML + ' hello';
//       document.body.append(secondaryTitle);
//     }, 3000)
//
//   }, 3000)
//
// }, 3000)

// document.body.append(secondaryTitle);
//
// setTimeout(function () {
//   container.append(secondaryTitle);
//
//   setTimeout(function () {
//     container.prepend(secondaryTitle);
//
//     setTimeout(function () {
//       container.before(secondaryTitle);
//
//       setTimeout(function () {
//         container.after(secondaryTitle);
//       }, 3000);
//
//     }, 3000);
//   }, 3000);
//
// }, 3000)

// container.replaceWith(secondaryTitle);

// const titleCopy = secondaryTitle.cloneNode(true);
// titleCopy.innerHTML += ' copy';
// document.body.prepend(titleCopy);

// container.insertAdjacentHTML('beforebegin', '<p>before begin</p>')
// container.insertAdjacentHTML('afterbegin', '<p>after begin</p>')
// container.insertAdjacentHTML('beforeend', '<p>before end</p>')
// container.insertAdjacentHTML('afterend', '<p>after end</p>')


// console.dir(secondaryTitle);
// console.log(secondaryTitle);

// var counter = 0;
// const secondDiv = document.querySelector('#container div:nth-child(2)');
// secondDiv.addEventListener('click', function() {
//   counter++;
//   console.log(counter + ':    ', this.innerHTML);
// });
//
// setInterval(function () {
//   container.innerHTML = container.innerHTML;
// }, 1000);
//
// container.addEventListener('click', function (e) {
//   if (e.target.id === 'second') {
//     counter++;
//     console.log(counter + ':    ', e.target.innerHTML);
//   }
// })


// Practice 1
// const data = [
//   { id: 1, title: 'Lorem',  text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, veniam.' },
//   { id: 2, title: 'Aliquid',  text : 'Aliquid asperiores dolore eveniet fugiat harum laudantium rem sequi tempora.' },
//   { id: 3, title: 'Aut',  text : 'Aut consequatur dignissimos eaque illum laudantium necessitatibus quod. Minima, ratione?' },
//   { id: 4, title: 'Earum',  text : 'Earum expedita illo ipsa modi nihil nisi possimus repellat temporibus.' },
//   { id: 5, title: 'Cumque',  text : 'Cumque dicta eos id, natus nihil quibusdam quis rem saepe.' },
// ]
//
// const fragment = document.createDocumentFragment();
// const list = document.querySelector('#list');
// for (let i = 0; i < data.length; i++) {
//   const item = data[i];
//
//   const listItem = document.createElement('li');
//   listItem.classList.add('list-item');
//   listItem.innerHTML = item.title;
//   // listItem.setAttribute('data-text', item.text);
//   listItem.setAttribute('data-id', item.id);
//   listItem.addEventListener('click', onItemClick);
//   fragment.append(listItem);
// }
// list.append(fragment);
//
// function onItemClick() {
//   const id = +this.getAttribute('data-id');
//   const item = data.find(function(item) {
//     return item.id === id;
//   })
//   console.log(item.text);
// }


// Practice 2
// const conversation = document.querySelector('#conversation');
// const input = document.querySelector('#message-input');
// const sendMessageButton = document.querySelector('#send-message');
// const noMessageText = document.querySelector('#no-message-text');
//
// sendMessageButton.addEventListener('click', onSendMessage);
//
// function onSendMessage() {
//   const messagesCount = conversation.querySelectorAll('.message').length;
//   if (messagesCount === 0) {
//     noMessageText.remove();
//   }
//
//   const text = input.value;
//   const currentDate = new Date();
//   const author = 'Evgeniy';
//   const date = currentDate.getFullYear() + '–' + (currentDate.getMonth() + 1) + '–' + currentDate.getDate();
//
//   const message = document.createElement('div');
//   message.classList.add('message');
//
//   const authorHTML = '<div class="message__author">' + author + '</div>';
//   const dateHTML = '<div class="message__date">' + date + '</div>';
//
//   const headerHTML = '<div class="message__header">' + authorHTML + dateHTML + '</div>';
//   const textHTML = '<p>' + text + '</p>';
//
//   message.innerHTML = headerHTML + textHTML;
//
//   conversation.append(message);
//   input.value = '';
//
// }















