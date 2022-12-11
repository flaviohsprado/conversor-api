import { User } from '../../../server/domain/entities/user.entity';
import { ICacheManager } from '../../../server/domain/interfaces/cache.interface';
import { IExceptionService } from '../../../server/domain/interfaces/exceptions.interface';
import { IUserRepository } from '../../../server/domain/repositories/user.repository';
import { FindUserByKeyUseCase } from '../../../server/usecase/user/find-user-by-key.usecase';

describe('uses-cases/user', () => {
  let findUserByKeyUseCases: FindUserByKeyUseCase;
  let userRepository: IUserRepository;
  let cacheManager: ICacheManager;
  let exception: IExceptionService;

  beforeEach(() => {
    cacheManager = {} as ICacheManager;
    cacheManager.getCachedObject = jest.fn();
    cacheManager.setObjectInCache = jest.fn();

    userRepository = {} as IUserRepository;
    userRepository.findOne = jest.fn();

    exception = {} as IExceptionService;
    exception.throwNotFoundException = jest.fn();

    findUserByKeyUseCases = new FindUserByKeyUseCase(
      userRepository,
      exception,
      cacheManager,
    );
  });

  describe('find-user-by-key', () => {
    it('should return an user object.', async () => {
      const result: User = {
        id: 'id',
        username: 'username',
        password: 'password',
        email: 'email',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(findUserByKeyUseCases, 'execute')
        .mockReturnValue(Promise.resolve(result));

      expect(await findUserByKeyUseCases.execute('id', 'id')).toEqual(result);
    });
  });
});
