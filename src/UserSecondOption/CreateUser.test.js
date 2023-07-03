import axios from 'axios';
import CreateUser from './CreateUser';
import UserRepository from './User.repository';

jest.mock('./User.repository');
jest.mock('axios');

describe('CreateUser', () => {
  it.only('should create a user with advice', async () => {
    // Mock UserRepository
    const mockUserRepository = new UserRepository();
    mockUserRepository.createUserByName.mockReturnValue({
      name: 'Julia',
      id: 1,
    });

    // Mock axios
    const mockAdvice = 'If you want to be happy, be grateful.';
    const mockAxiosResponse = {
      data: {
        slip: {
          advice: mockAdvice,
        },
      },
    };
    axios.get.mockResolvedValue(mockAxiosResponse);

    // Instância CreateUser
    const createUser = new CreateUser();
    createUser.userRepository = mockUserRepository;
    createUser.axios = axios;

    const result = await createUser.createUserByName('Julia');

    // Verifica se o usuário foi criado corretamente
    expect(result).toEqual({
      name: 'Julia',
      id: 1,
      advice: mockAdvice,
    });

    // Verifica as chamadas de mock
    expect(mockUserRepository.createUserByName).toHaveBeenCalledTimes(1);
    expect(mockUserRepository.createUserByName).toHaveBeenCalledWith('Julia');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.adviceslip.com/advice');
  });
});
