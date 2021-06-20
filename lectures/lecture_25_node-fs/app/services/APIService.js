const UserService = require('./UserService')

function getUserDataFromRequest(req) {
  return {
    firstName : req.body.firstName,
    lastName  : req.body.lastName,
    email     : req.body.email,
  }
}

function createUser(req, res) {
  const userData = getUserDataFromRequest(req);
  UserService.createUser(userData)
    .then(function (user) {
      res.send(JSON.stringify(user));
    })
    .catch(function (err) {
      res.send(JSON.stringify(err));
    })

}

function deleteUser(req, res) {
  UserService.deleteUser(req.params.id);
  res.send('OK deleteUser');
}

function updateUser(req, res) {
  const userData = getUserDataFromRequest(req);
  UserService.updateUser(req.params.id, userData)
  res.send('OK updateUser');
}

function getUser(req, res) {
  const user = UserService.getUser(req.params.id)
  res.send(JSON.stringify(user));
}

function getAllUsers(req, res) {
  UserService.getAllUsers()
    .then(function (users) {
      res.send(JSON.stringify(users));
    })
}

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  getAllUsers
}
