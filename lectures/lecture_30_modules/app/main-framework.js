(function() {
  // const filterInput = document.querySelector('#filter');

  const data = {}

  const usersModule = app.getModule('users');
  usersModule.getUsers().then(users => {
    data['users'] = users;
    rerenderLoops();
  });

  function rerenderLoops() {
    const elementForLoops = document.querySelectorAll('[app-repeat]');
    for (let i = 0; i < elementForLoops.length; i++) {
      const item = elementForLoops[i];
      const repeatValue = item.getAttribute('app-repeat');
      const loopVar = repeatValue.split(' ')[0];
      const dataVar = repeatValue.split(' ')[2];

      if (data[dataVar]) {
        renderData(data[dataVar], loopVar, item);
      }
    }

    function renderData(data, loopVar, elem) {
      data.forEach(item => {
        if (elem.innerHTML.includes('{{ user.firstName | uppercase }}')) {
          elem.innerHTML = elem.innerHTML.replace('{{ user.firstName | uppercase }}', item.firstName.toUpperCase());
        } else {
          elem.innerHTML = elem.innerHTML.replace('{{ user.firstName }}', item.firstName);
        }

      })
    }
  }

  // filterInput.addEventListener('input', (e) => {
  //   usersList.innerHTML = 'Loading...';
  //   usersModule.getUsers(e.target.value).then((users) => {
  //     renderUsers(users);
  //   });
  // })
})()

// function renderUsers(users) {
//   const holder = document.createElement('div');
//   users.forEach(user => {
//     const userDiv = document.createElement('div');
//     userDiv.innerHTML = user.firstName + ' ' + user.lastName;
//     holder.append(userDiv);
//   })
//   usersList.innerHTML = holder.innerHTML;
// }
