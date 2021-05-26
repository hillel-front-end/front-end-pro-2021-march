const menu = document.querySelector('#menu');

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;
  const offset = 5;

  let left = x;

  if (left + menu.offsetWidth > window.innerWidth) {
    left = x - menu.offsetWidth;
  }

  menu.style.left = left + offset + 'px';
  menu.style.top = y + offset + 'px';
  menu.classList.remove('hidden');
  console.log('contextmenu')
});

document.addEventListener('click', function(e) {
  if (!e.target.parentElement || e.target.parentElement.id !== 'menu') {
    menu.classList.add('hidden');
  }
})
