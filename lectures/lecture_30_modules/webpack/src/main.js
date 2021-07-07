// import usersModule from './users.js'
// import { getUsers } from './users.js'
// import * as usersModule from './users.js'
import usersModule, { getUsers } from './users.js'
import './main.css'

const filterInput = document.querySelector('#filter');
const usersList = document.querySelector('#list');

usersModule.getUsers().then(renderUsers);

function renderUsers(users) {
  const holder = document.createElement('div');
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = user.firstName + ' ' + user.lastName;
    holder.append(userDiv);
  })
  usersList.innerHTML = holder.innerHTML;
}

filterInput.addEventListener('input', (e) => {
  usersList.innerHTML = 'Loading...';
  usersModule.getUsers(e.target.value).then((users) => {
    renderUsers(users);
  });
})

