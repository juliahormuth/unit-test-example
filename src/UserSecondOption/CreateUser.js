import axios from 'axios';
import UserRepository from './User.repository.js';

export default class CreateUser {
  userRepository = new UserRepository();
  axios = axios;

  async createUserByName(name) {
    const user = this.userRepository.createUserByName(name);

    const results = await this.axios.get('https://api.adviceslip.com/advice');

    user.advice = results.data.slip.advice;

    console.log(user.advice);

    return user;
  }
}
