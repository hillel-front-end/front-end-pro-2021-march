console.log('Lecture 14. Events Bubbling');

/*

Lecture 14. Events Bubbling

Структура:
  – Как работает выполнение событие на родительских элементах
  – Визуальное расположение не влияет на всплытие
  – parentElement и ссылки на элементы
  – Всплывающие и не всплывающие события (bubbles: boolean)
  – event.target vs this
  – 3 фазы выполнения события
  – Переключение стадии
  – stopPropagation vs stopImmediatePropagation

  – Делегирование выполнения событий

 */

// const container = document.querySelector('.container');
// container.addEventListener('click', function(e) {
//   console.log('---- CONTAINER ----');
// });
//
// const items = document.querySelectorAll('.container__item');
// items.forEach(function(item) {
//   item.addEventListener('click', function(e) {
//     console.log(e);
//   });
// });
//
// const block = document.querySelector('.block');
// block.addEventListener('click', function(e) {
//   console.log('---- BLOCK ----');
// });

// focus – не всплывающее событие
// const input = document.querySelector('input');
// input.addEventListener('focus', function(e) {
//   console.log(e);
// });

// const link = document.querySelector('a');
// link.addEventListener('click', function(e) {
//   e.preventDefault();
//   // window.open('https://google.com', '_blank');
//   console.log(e);
// });

// const usersList = document.querySelector('.users-list');
// usersList.addEventListener('click', function(event) {
//   var userId = event.target.getAttribute('data-user-id');
//   console.log(userId);
// })

// document.body.addEventListener('click', function(e) {
//   // console.log('---- BODY ----');
//   // console.log(this, e.target.getAttribute('data-item-name'));
//   console.log(e);
// }, true);


const userRows = document.querySelectorAll('table tr');
const deleteButtons = document.querySelectorAll('table tr button');

userRows.forEach(function(userRow) {
  userRow.addEventListener('click', function(e) {
    // неправильный подход
    // e.target.style.background = 'red';
    // alert(e.target.getAttribute('data-user-name'))
    alert(this.getAttribute('data-user-name'))
  })
})

deleteButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    // e.stopPropagation();
    confirm('Вы точно хотите удалить этого пользователя?');
  })
})

// document.body.addEventListener('click', function(e) {
//   console.log(this);
//   console.log(e.target);
//   e.target.style.background = 'red';
//   alert(this.getAttribute('data-user-name'))
// })






































