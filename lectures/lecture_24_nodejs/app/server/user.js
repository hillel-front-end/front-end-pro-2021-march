const news = require('./news');
news['mynews'] = true;
console.log('user.js', news);

const USER_TYPE = {
  STAFF : 'STAFF',
  DELIVERY : 'DELIVERY'
}

class User {
  constructor(firstName, lastName, type) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.type = type;
  }
  sayHello() {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

const user = {
  firstName : 'vasya',
  lastName: 'pupkin',
}

module.exports = {
  User,
  USER_TYPE
}
