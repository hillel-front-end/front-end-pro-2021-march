const FileService = require('./FileService')

const usersPath = './users.json';

function createUser(data) {
  const user = Object.assign({}, { id : Math.floor(Math.random() * 10000) }, data);

  return FileService.isFileExists(usersPath)
    .then(
      function () {
        return FileService.readFileJSON(usersPath)
      },
      function () {
        return FileService.saveFileJSON(usersPath, []);
      },
    )
    .then(function (users) {
      users.push(user);
      FileService.saveFileJSON(usersPath, users)
      return user;
    })
}

function updateUser(id, data) {

}

function deleteUser(id) {

}

function getUser(id) {

}

function getAllUsers() {
  return FileService.isFileExists(usersPath)
    .then(function () {
        return FileService.readFileJSON(usersPath)
      },
      function () {
        return [];
      },
    )
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
}
