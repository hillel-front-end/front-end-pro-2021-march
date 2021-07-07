(function () {
  const filterInput = document.querySelector('#filter');
  const usersList = document.querySelector('#list');

  const usersModule = app.getModule('users');
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
})()

