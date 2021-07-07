export function getUsers(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let users = [
        { firstName : 'June', lastName : 'Moreno' },
        { firstName : 'Vincent', lastName : 'Moore' },
        { firstName : 'Allen', lastName : 'Ortiz' },
      ];
      if (query) {
        users = users.filter(user => user.lastName.toLowerCase().includes(query.toLowerCase()))
      }
      resolve(users);
    }, 500);
  })
}

const userModule = {
  getUsers
}

export default userModule;
