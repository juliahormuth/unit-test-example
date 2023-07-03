import User from './User.js';

export default class UserRepository {
  user = new User();

  createUserByName(name) {
    this.user.id = 1;
    this.user.name = name;
    return this.user;
  }
}
