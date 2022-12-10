import { User } from '../../../server/domain/entities/user.entity';
import { ICacheManager } from '../../../server/domain/interfaces/cache.interface';
import { IUserRepository } from '../../../server/domain/repositories/user.repository';
import { FindAllUserUseCase } from '../../../server/domain/use-cases/user/find-all-users.usecase';

describe('uses-cases/user', () => {
  let findAllUserUseCases: FindAllUserUseCase;
  let userRepository: IUserRepository;
  let cacheManager: ICacheManager;

  beforeEach(() => {
    cacheManager = {} as ICacheManager;
    cacheManager.getCachedObject = jest.fn();
    cacheManager.setObjectInCache = jest.fn();

    userRepository = {} as IUserRepository;
    userRepository.findAll = jest.fn();

    findAllUserUseCases = new FindAllUserUseCase(userRepository, cacheManager);
  });

  describe('find-all-users', () => {
    it('should return an array of user object.', async () => {
      const result: User[] = [
        {
          id: 'id',
          username: 'username',
          password: 'password',
          email: 'email',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest
        .spyOn(findAllUserUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(await findAllUserUseCases.execute()).toEqual(result);
    });
  });
});
